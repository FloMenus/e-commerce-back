const express = require("express");
const app = express();
const { Product } =  require("../models/index")


// get all products
app.get("/", async (req, res) => {
    const products = await Product.findAll()
    console.log(products);
    res.json(products);
});

// get one product /:id
app.get("/:id", async (req, res) => {
    const product = await Product.findOne(req.params.id);
    res.json(product);
});

// create an product
app.post("/", async (req, res) => {
    const product = await Product.create(req.body);
    res.json(product);
})

// modify product /:id
app.put("/:id", async (req, res) => {
    const { id } = req.params;
    const product = await Product.update(req.body, {
        where: { id }
    });
    res.json(product);
}
)

// delete product /:id
app.delete("/:id", async (req, res) => { 
    const { id } = req.params;
    const product = await Product.destroy({
        where: { id }
    });
    res.json(product);
})

module.exports = app;