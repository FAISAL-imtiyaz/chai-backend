//when we talk to DB  use try catch and keep in mine async and await
//require('dotenv').config({path:'/env'});

import dotenv from "dotenv"


import connectDB from "./db/index.js";

dotenv.config({
    path:'./env'
})


connectDB()
/*
1st approach------------->>>
const app = express()
import express from "express"
(async()=>{
    try{
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error",(error)=>{
        console.log("Error:",erroe);
        throw error
       })
       app.listen(process.env.PORT,()=>{
        console.log(`App is listening on port ${process.abort.env.PORT}`);
       })
    }catch(error){
        console.log("ERROR:",error)
        throw err
    }
})()
    */