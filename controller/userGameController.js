
const { user_game } = require("../models")

async function viewAll(req,res) {
  try {
    let data = await user_game.findAll();
    res.render("userGame", {data});
  } catch (error) {
    console.log(error);
  }
}

async function createData(req, res) {
  try {
    let { username,password } = req.body;
    let input = { username,password };
    let data = await user_game.create(input);
    res.redirect("/userGame");
  } catch (error) {
    console.log(error);
  }
}

async function updateData(req, res) {
  try {
    let { id } = req.params;
    let { username,password } = req.body;
    let input = { username,password };

    let data = await user_game.update(input, { where: { id: id } });
    res.redirect("/userGame");
  } catch (error) {
    console.log(error);
  }
}

async function deleteData(req, res) {
  try {
    let { id } = req.params;

    let data = await user_game.destroy({ where: { id: id } });
    res.redirect("/userGame");
  } catch (error) {
    console.log(error);
  }
}

async function viewById(req, res) {
  try {
    let { id } = req.params;
    let data = await user_game.findOne({ where: { id: id } });
    res.status(200).json(data);
  } catch (error) {
    console.log(error);
  }
}

async function viewForm(req, res) {
  try {
    res.render("add");
  } catch (error) {
    console.log(error);
  }
}

async function viewFormEdit(req, res) {
  try {
    let { id } = req.params;
    let data = await user_game.findOne({ where: { id: id } });
    res.render("edit", { data });
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  viewAll,
  createData,
  updateData,
  deleteData,
  viewById,
  viewForm,
  viewFormEdit
};
