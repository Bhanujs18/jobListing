const express = require('express');
const app = express();
const db = require("./db/db");
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')

dotenv.config();

app.use(express.json());

db();

app.use("/api/v1/auth" , authRoute)

app.get("/" ,(req,res)=>{
    res.status(202).json({
        message: "I m Alive!!!"
    })
})

app.use("*" , (req, res) => {
    res.status(404).json({
        message : "No Routes Found"
    })
})

app.listen(process.env.PORT , ()=>{
    console.log(`SERVER IS RUNNING~~ ${process.env.PORT}`);
})
