const mongoose = require('mongoose')

const db = async() => {
    await mongoose.connect(process.env.MONGO_URL)
    .then(()=>console.log("DB CONNECTED"))
    .catch(()=>console.log("DB FAILED TO CONNECT"))
}

module.exports = db;