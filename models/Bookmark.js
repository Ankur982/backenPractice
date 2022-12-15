const mongoose=require("mongoose");

const bookmarkSchema=new mongoose.Schema({
    shoppingDetailsData:{type:mongoose.Schema.Types.ObjectId,ref:"Product"}
},{
    timestamps:true
});


module.exports = mongoose.model("Bookmark", bookmarkSchema);