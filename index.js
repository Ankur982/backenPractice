const express = require('express');

const mongoose = require('mongoose');

const dotenv = require('dotenv');

const productRoute = require("./routes/product");

const bookmarkRoute = require("./routes/bookmark")

const cors = require("cors");
// accessing dotenv
dotenv.config();

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());


//Rest Api

app.use("/product", productRoute);

app.use("/bookmark", bookmarkRoute);


mongoose.set('strictQuery', false);

mongoose.connect( process.env.MONGO_URL )
.then(()=>{
    console.log("DB connection Successfull")
})
.catch((err)=>{
    console.log(err)
})



app.listen( process.env.PORT || 8080, () => { 
    console.log('Server Started On Port 8080') 
});