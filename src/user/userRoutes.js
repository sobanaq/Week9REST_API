const { Router } = require("express");
const {
  createUser,
  listUsers,
  login,
  updateUserEmail,
  deleteUser,
} = require("./userControllers");
const { hashPass, comparePass, tokenCheck } = require("../middleware");
const userRouter = Router();

userRouter.get("/listUser", listUsers);
userRouter.get("/listUser", tokenCheck, listUsers);
userRouter.post("/addUser", hashPass, createUser);
userRouter.post("/login", comparePass, login);
userRouter.put("/updateUserEmail", tokenCheck, updateUserEmail);
userRouter.delete("/deleteUser", tokenCheck, deleteUser);
userRouter.get("/authCheck", tokenCheck, login);

module.exports = userRouter;
