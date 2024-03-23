const express = require('express');
const app = express();
const db = require("./db/db");
const dotenv = require('dotenv')
const authRoute = require('./routes/auth')
const jobRoute = require('./routes/job');
const cors = require('cors');

dotenv.config();

app.use(cors());
app.use(express.json());

db();

app.use("/api/v1/auth" , authRoute)
app.use("/api/v1/job" , jobRoute)

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

app.use((error , req, res , next) =>{
console.log(error);
res.status(500).json({ errorMessage: "Something went wrong!" });
})

app.listen(process.env.PORT , ()=>{
    console.log(`SERVER IS RUNNING~~ ${process.env.PORT}`);
})
