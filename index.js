const express = require('express');

const mongoose = require("mongoose");

const authRoute = require("./routes/User");

const cors = require("cors");

const MONGO_URL = 'mongodb+srv://Ankur:ankur@cluster0.c4ohs0g.mongodb.net/rm201'

const app = express();

app.use(cors());

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.use("/user" , authRoute);


mongoose.set('strictQuery', false);

mongoose.connect( MONGO_URL )
.then(()=>{
    console.log("DB connection successfull")
})
.catch((err)=>{
    console.log(err)
});

app.listen( 8080, () => { 
    console.log('server started on port 8080');
});