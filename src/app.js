// import express from "express"
// import cors from "cors" 
// import cookieParser from "cookie-parser"



// const app = express()


// app.use(cors({
//     origin:process.env.CORS_ORIGIN,
//     Credentials:true
// }))


// app.use(express.json({limit:"16kb"}))

// app.use(express.urlencoded({extended:true,limit:"16kb"}))

// app.use(express.static("public"))

// app.use(cookieParser())

//  //routes import

//  import  userRouter from './routes/user.routes.js'


//  //rotes declaration

//  app.use("/api/v1/users",userRouter)

// export {app}


import express from 'express';
import cors from 'cors';  // Ensure cors is imported
import cookieParser from 'cookie-parser';

// Create an instance of the Express application
const app = express();

// Use CORS middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true  // Note the lowercase 'c' in credentials
}));

// Use other middleware
app.use(express.json({ limit: '16kb' }));
app.use(express.urlencoded({ extended: true, limit: '16kb' }));
app.use(express.static('public'));
app.use(cookieParser());

// Import routes
import userRouter from './routes/user.routes.js';

// Use routes
app.use('/api/v1/users', userRouter);

export { app };