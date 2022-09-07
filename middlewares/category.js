const { Category } = require("../models/");

const checkIfIdExist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({
      where: { id },
    });
    if (category) {
      req.category = category;
      next();
    } else {
      res.status(404).json("Category not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

//
const checkIfAlreadyExist = async (req, res, next) => {
  try {
    const { name } = req.body;
    const category = await Category.findOne({
      where: { name },
    });
    if (!category) {
      req.category = category;
      next();
    } else {
      res.status(409).json("Category already exist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { checkIfIdExist, checkIfAlreadyExist };