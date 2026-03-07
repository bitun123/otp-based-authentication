const mongoose = require("mongoose");


const ConnectDb = async()=>{
await mongoose.connect(process.env.MONGO_URL);
console.log("connected to database")
}


module.exports = ConnectDb;