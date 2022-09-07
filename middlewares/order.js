const { Order } = require("../models");

const checkIfIdExist = async (req, res, next) => {
  try {
    const { id } = req.params;
    const order = await Order.findOne({
      where: { id },
    });
    if (order) {
      req.order = order;
      next();
    } else {
      res.status(404).json("Order not found");
    }
  } catch (error) {
    console.log(error);
    res.status(500).json("Internal Server Error");
  }
};

//

module.exports = { checkIfIdExist };
