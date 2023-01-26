const User = require("./userModels");
const jwt = require("jsonwebtoken");

//Creating a user -------------------------------------------------------

exports.createUser = async (request, response) => {
  // console.log(request);
  try {
    const newUser = await User.create(request.body);
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

//Reading a username -------------------------------------------------------

exports.login = async (request, response) => {
  try {
    const token = jwt.sign({ _id: request.user._id }, process.env.SECRET_KEY);
    response.send({ user: request.user.username, token });
  } catch (error) {
    console.log(error);
    response.status(401).send({ error: error.message });
  }
};

//Updating a username -------------------------------------------------------

exports.updateUserEmail = async (request, response) => {
  try {
    await User.updateOne(
      { user: request.body.username },
      { email: request.body.email }
    );
    response
      .status(200)
      .send({ msg: "You have succesfully updated the email address." });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error.message });
  }
};

//Deleting a user -------------------------------------------------------

exports.deleteUser = async (request, response) => {
  try {
    await User.deleteOne({ user: request.body.username });
    response.status(200).send({
      msg: `You have succesfully deleted user ${request.body.username}`,
    });
  } catch (error) {
    console.log(error);
    response.status(500).send({ error: error.message });
  }
};
