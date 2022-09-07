const { Product } = require("../models/");

const checkIfIdExist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findOne({
      where: { id },
    });
    if (product) {
      req.product = product;
      next();
    } else {
      res.status(404).json("Product not found");
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
    const product = await Product.findOne({
      where: { name },
    });
    if (!product) {
      req.product = product;
      next();
    } else {
      res.status(409).json("Product already exist");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

module.exports = { checkIfIdExist, checkIfAlreadyExist };