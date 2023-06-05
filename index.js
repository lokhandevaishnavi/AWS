import express from "express"
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv"
import cors from "cors"
import bodyParser from "body-parser";
import userRoutes from "./routes/user.js"




dotenv.config();
const app=express();
app.use(express.json());
app.use(bodyParser.json());
app.use(morgan("common"));
app.use(cors());
app.use("/user",userRoutes)






/* MONGOOSE SETUP */
const port = process.env.port || 2000;

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => console.log(`Server Port: ${port}`));

    
  })
  .catch((error) => console.log(`${error} did not connect`));

