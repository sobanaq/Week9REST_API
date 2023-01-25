const User = require("./userModels");
const jwt = require("jsonwebtoken");

exports.createUser = async (request, response) => {
  // console.log(request);
  try {
    const newUser = await User.create(request.body);
    response.status(201).send({ user: newUser });
    const token = jwt.sign({ _id: newUser._id }, process.env.SECRET_KEY);
    response
      .status(201)
      .send({ msg: "createUser has created the following token", token });
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

exports.login = async (request, response) => {
  try {
    const token = jwt.sign({ _id: request.user._id }, process.env.SECRET_KEY);
    response.send({ user: request.user.username, token });
  } catch (error) {
    console.log(error);
    response.status(401).send({ error: error.message });
  }
};
