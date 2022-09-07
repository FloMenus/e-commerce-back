const express = require("express");
const app = express();
const { Order, Product } = require("../models");

const { checkIfIdExist } = require("../middlewares/order");

// get all orders
app.get("/", async (req, res) => {
  const orders = await Order.findAll();
  res.json(orders);
});

// get one order /:id
app.get("/:id", checkIfIdExist, async (req, res) => {
  const { id } = req.params;
  const order = await Order.findOne({
    where: { id },
  });
  res.json(order);
});

// get all products from one order /:id_order/products
app.get("/:id/products", checkIfIdExist, async (req, res) => {
  const { id } = req.params;
  const products = await Product.findAll({
    where: {
      id,
    },
  });
  res.json(products);
});

// create an order
app.post("/", async (req, res) => {
  const order = await Order.create(req.body);
  res.json(order);
});

// modify order /:id
app.put("/:id", checkIfIdExist, async (req, res) => {
  const { id } = req.params;
  const order = await Order.update(req.body, {
    where: { id },
  });
  res.json(order);
});

// delete order /:id
app.delete("/:id", checkIfIdExist, async (req, res) => {
  const { id } = req.params;
  const order = await Order.destroy({
    where: { id },
  });
  res.json(order);
});

module.exports = app;
