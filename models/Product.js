const mongoose = require('mongoose');


const productSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true,
    },
    quantity: {
        type: Number,
        require: true,
    },
    priority: {
        type: String,
        require: true,
    },
    date: {
        type:String,
        default: new Date(),
    },
    description: {
        type: String,
        require: true,
    },

},
    { timestamps: true }
);


module.exports = mongoose.model("Product", productSchema);