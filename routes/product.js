const Product = require("../models/Product");

const router = require("express").Router();

//CREATE

router.post("/", async (req, res) => {
    const newProduct = new Product(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).send(savedProduct);
    } catch (err) {
        res.status(500).send(err);
    }
});




//DELETE
router.delete("/:id", async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id);
        res.status(200).send("Product has been deleted...");
    } catch (err) {
        res.status(500).send(err);
    }
});


//GET ALL PRODUCTS
router.get("/", async (req, res) => {
    const qNew = req.query.new;
 
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 });
        } 
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;
