const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');
const mongoose = require("mongoose");

const app = express();
app.use(cors({
    origin: ["https://mern-ecommerce21.netlify.app"], // this is the front-end URL https://project-react-mer-ne-commerce-front.vercel.app
    method: ["POST","GET"];
    credentials: true, // enable cookies
}));
app.use(express.json());
app.use(cookieParser())
mongoose.connect('mongodb+srv://nimerelsayed:OrOvgYWGNwjjy2qq@mern.p9qcncz.mongodb.net/MERN-Ecommerce?retryWrites=true&w=majority&appName=MERN');

app.use("/api",router);

app.get("/", (req,res) => {
    res.json("Helo Tiger...");
})



});
