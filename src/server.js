import express from "express";
import dotenv from "dotenv"; //  imports the dotenv package, which is used to manage environment variables in Node.js apps.
import {initDB} from "./config/db.js";
import rateLimiter from "./middleware/rateLimiter.js";
import Transactionsroutes from "./routes/Transactionsroutes.js";

dotenv.config()

// creating a variable
const app= express(); // calls the Express function, which creates an Express application 

//  middleware
app.use(express.json()); // NB: this line must be above all routes
app.use(rateLimiter);
app.use("/api/transactions", Transactionsroutes)


// server will listen to that port, if not it will fall on 5001 as the default one
const PORT= process.env.PORT || 5001;


console.log("my port:", process.env.PORT); // 5001


// Start the server on port 5001. When it's ready, print a message saying the app is running.
// ()=>{ ... }
// This is an arrow function, which serves as a callback.
// It runs after the server has successfully started.

initDB().then(()=>{
  app.listen(PORT, ()=>{
    console.log("App is up and running on PORT:", PORT)
  });
});