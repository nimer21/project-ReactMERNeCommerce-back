const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const connectDB = require('./config/db');
const router = require('./routes');

const app = express();
app.use(cors({
    origin: ["https://project-react-mer-ne-commerce-front.vercel.app"], // this is the front-end URL
    method: ["POST","GET"];
    credentials: true, // enable cookies
}));
app.use(express.json());
app.use(cookieParser())

app.use("/api",router);

app.get("/", (req,res) => {
    res.json("Helo Tiger...");
})

const PORT = 8000 || process.env.PORT
connectDB().then(()=>{
    app.listen(PORT,()=>{
        console.log(`MongoDB connected successfully`);
        console.log(`Server is running on port ${PORT}`);
    });
});
