require("dotenv").config();
const mongoose = require("mongoose");

async function connection() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("succesfully connected");
  } catch (error) {
    console.log(error);
  }
}

connection();
