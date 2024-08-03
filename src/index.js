//when we talk to DB  use try catch and keep in mine async and await
//require('dotenv').config({path:'/env'});

// import dotenv from "dotenv"


// import connectDB from "./db/index.js";

// dotenv.config({
//     path:'./env'
// })


// connectDB()

// .then((()=>{
//     app.liste(process.env.PORT || 8000,()=>{
//         console.log( `SEEerver is running at port: ${process.env.PORT}`);
//     })
// })
// .catch( (err)=>{
//     console.log("Mongodb connection failed !!!!", err);

// })

// )   

// import express from "express";
// import dotenv from "dotenv";
// import connectDB from "./db/index.js";

// dotenv.config({
//     path: './env'
// });


// connectDB()
//     .then(() => {
//         app.listen(process.env.PORT || 8000, () => {
//             console.log(`Server is running at port: ${process.env.PORT}`);
//         });
//     })
//     .catch((err) => {
//         console.log("MongoDB connection failed !!!!", err);
//     });

// import express from 'express';
// import dotenv from 'dotenv';
// import connectDB from './db/index.js';
// import{app} from './app.js'
// // Load environment variables from .env file
// dotenv.config({
//   path: './env'
// });

// Create an instance of the Express application
// const app = express();

// Middleware, routes, etc. can be added here
// Example: app.use('/api', apiRoutes);

// Connect to MongoDB and start the server
// connectDB()
//   .then(() => {
//     app.listen(process.env.PORT || 8000, () => {
//       console.log(`Server is running at port: ${process.env.PORT || 8000}`);
//     });
//   })
//   .catch((err) => {
//     console.log('MongoDB connection failed !!!!', err);
//   });

// export default app;

//1st approach------------->>>
// const app = express()
// import express from "express"
// (async()=>{
//     try{
//        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//        app.on("error",(error)=>{
//         console.log("Error:",erroe);
//         throw error
//        })
//        app.listen(process.env.PORT,()=>{
//         console.log(`App is listening on port ${process.abort.env.PORT}`);
//        })
//     }catch(error){
//         console.log("ERROR:",error)
//         throw err
//     }
// }
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './db/index.js';
import { app } from './app.js';  // Import app from app.js

// Load environment variables from .env file
dotenv.config({
  path: './env'
});

// Connect to MongoDB and start the server
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
  })
  .catch((err) => {
    console.log('MongoDB connection failed !!!!', err);
  });
