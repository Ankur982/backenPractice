const Bookmark=require('../models/Bookmark');

const router = require("express").Router();



router.get("/",async(req,res)=>{
    try{
        let bookmarkData=await Bookmark.find();
        res.send(bookmarkData)
    }catch(e){
        res.status(500).send(e.message);
    }
})



router.post("/", async (req, res) => {
    const newProduct = new Bookmark(req.body);

    try {
        const savedProduct = await newProduct.save();
        res.status(200).send(savedProduct);
    } catch (err) {
        res.status(500).send(err);
    }
});

module.exports=router;