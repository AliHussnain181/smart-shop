import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors"
import mongoose from "mongoose";



dotenv.config();

const app = express();

app.use(express.json())

app.use(cookieParser())


app.use(
    cors({
        origin: process.env.FRONTEND_URL,
        credentials: true,
        methods: ["GET", "POST", "PUT", "DELETE"],
    })
)







import user from "./Routes/userRoutes.js"
import product from "./Routes/productRoutes.js"
import ErrorMiddleware from "./Middlewares/Error.js";

app.use("/api/v1", user);
app.use("/api/v1", product);


app.get("/", (req, res) =>
    res.send(
        `<h1>Site is Working. click <a href=${process.env.FRONTEND_URL}>here</a> to visit frontend.</h1>`
    )
);

const connectDB = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log(`Database is connect`);
};
connectDB()

app.listen(process.env.PORT, () => {
    console.log(`Server is working on port: ${process.env.PORT}`);
});

app.use(ErrorMiddleware)