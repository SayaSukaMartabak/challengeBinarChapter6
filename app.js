const express = require("express");
const app = express();
const PORT = 8000;
const router = require("./routers");

app.set('view engine', 'ejs')

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(__dirname + "/public/"));

app.use("/", router);

app.listen(PORT, () => console.log(`running at port ${PORT}`));
