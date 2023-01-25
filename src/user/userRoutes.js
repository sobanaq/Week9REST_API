const { Router } = require("express");
const { createUser, listUsers } = require("./userControllers");
const { hashPass } = require("../middleware");
const { createUser, listUsers, login } = require("./userControllers");
const { hashPass, comparePass, tokenCheck } = require("../middleware");

const userRouter = Router();

userRouter.get("/listUser", listUsers);
userRouter.get("/listUser", tokenCheck, listUsers);
userRouter.post("/addUser", hashPass, createUser);
userRouter.post("/login", comparePass, login);

module.exports = userRouter;
