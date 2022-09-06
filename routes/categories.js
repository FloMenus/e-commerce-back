const express = require("express");
const app = express();
const { Category, Product } =  require("../models")

// get all categories
app.get("/", async (req, res) => {
    const categories = await Category.findAll();
    res.json(categories);
});

// get one category /:id
app.get("/:id", async (req, res) => {
    const category = await Category.findOne(req.params.id);
    res.json(category);
});

// get all products from one category /:id_category/products
app.get("/:id/products", async (req, res) => {
    const { id } = req.params;    
    const products = await Product.findAll({
            where: {
            id
            }
        });
        res.json(products);
});

// create an category
app.post("/", async (req, res) => {
    const category = await Category.create(req.body);
    res.json(category);
})

// modify category /:id
app.put("/:id", async (req, res) => {
    const { id } = req.params;
    const category = await Category.update(req.body, {
        where: { id }
    });
    res.json(category);
}
)

// delete category /:id
app.delete("/:id", async (req, res) => { 
    const { id } = req.params;
    const category = await Category.destroy({
        where: { id }
    });
    res.json(category);
})

module.exports = app;