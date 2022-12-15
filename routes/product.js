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
    const qCategory = req.query.category;
    const qproduct_type = req.query.product_type;
    try {
        let products;

        if (qNew) {
            products = await Product.find().sort({ createdAt: -1 });
        } else if (qCategory) {
            products = await Product.find({ "category": qCategory });
        } else if (qproduct_type) {
            const { page = 1, limit = 10, orderBy = "price", order = "asc" } = req.query
            products = await Product.find({ "product_type": qproduct_type }).sort({ [orderBy]: order === "asc" ? 1 : -1 }).skip((page - 1) * limit).limit(limit)
        }
        else {
            const { page = 1, limit = 10, orderBy = "price", order = "asc" } = req.query
            products = await Product.find().sort({ [orderBy === "price" ? Number(orderBy) : orderBy]: order === "asc" ? 1 : -1 }).skip((page - 1) * limit).limit(limit)
        }
        res.status(200).send(products);
    } catch (err) {
        res.status(500).send(err);
    }
});


module.exports = router;
