// import package 
const express = require("express");
const cors = require("cors");
const app = express();
const path = require("path");


// import controller user dari
const user = require("./controller/userController");

// midleware
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended: false}));
app.use(express.json());



// routing user
app.use("/", user);


// listener
app.listen(3000, () =>{
    console.log("server terhubung di port 3000");
});