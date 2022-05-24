const express = require("express");
const { userGameController } = require("../controller");
const userGameRouter = express.Router();

userGameRouter.get("/", userGameController.viewAll);
userGameRouter.get("/add", userGameController.viewForm);
userGameRouter.get("/edit/:id", userGameController.viewFormEdit);
userGameRouter.post("/", userGameController.createData);
userGameRouter.post("/edit/:id", userGameController.updateData);
userGameRouter.get("/delete/:id", userGameController.deleteData);
userGameRouter.get("/detail/:id", userGameController.viewById);

module.exports = userGameRouter;
