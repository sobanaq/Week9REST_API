const { request } = require("express");
const User = require("./userModels");

exports.createUser = async (request, response) => {
  console.log(request);
  try {
    const newUser = await User.create(request.body);
    response.status(201).send({ user: newUser });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error.message });
  }
};

exports.listUsers = async (request, response) => {
  try {
    const users = await User.find({});
    response.status(218).send({ user: users });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error.message });
  }
};