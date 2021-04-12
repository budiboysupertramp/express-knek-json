// import express
const express = require("express");

// membuat variable bernama user
const user = express.Router();


// endpoint root / dengan method get
user.get("/", (req, res)=>{

    // membauat colllection untuk menampilkan data
    collectionData = [    
        {
            username : "fadliselaz",
            email : "fadliselaz@gmail.com",
            password : "qazcseedc"
        },
        
        {
            username : "budiiboy",
            email : "fadliselaz@gmail.com",
            password : "qazcseedc"
        },

        {
            username : "setiabudi",
            email : "fadliselaz@gmail.com",
            password : "qazcseedc"
        },
        
        
    ];
    
    // untuk memanggil json
    res.json(collectionData)
});


// untuk 
module.exports = user;