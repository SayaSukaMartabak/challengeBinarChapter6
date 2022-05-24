const express = require("express");
const userGameRouter = require("./routerUserGame");
const router = express.Router();

router.get("/", (req, res) => res.render('index'));
router.use("/userGame", userGameRouter);

module.exports = router;
