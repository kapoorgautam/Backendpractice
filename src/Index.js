// import mongoose from "mongoose";
//     import { DB_NAME } from "./Constants";
// import express from "express";
// const app = express();


// (async () => {
//     try { 
//        await  mongoose.connect(`${process.env.MONGO_URL}/${DB_NAME}`);
//         console.log("Connected to MONGODB_URI")
//         app.on("error", (error) => {
//             console.log("through some unusual error", error);
//         })


//         app.listen(process.env.PORT, () => {
//             console.log(`Listening on port, ${process.env.PORT}`)
//         })
//     }


//     catch (error) {
//         console.log(error)
//     }
// })();



import dotenv from "dotenv";
import connectDB from "./database/index.js";
dotenv.config({
    path : './.env'
})
connectDB()