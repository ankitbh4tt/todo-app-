const mongoose = require('mongoose');
require("dotenv").config();


//function to connect with database

const dbConnect = async () => {
    mongoose.connect(process.env.DATABASE_URL)
    .then(()=>console.log("DB connection successful"))
    .catch((error)=>{
        console.log("issue in db connection");
        console.error(error.message);
        process.exit(1);
    });
};





//syntax to export modules in backend
module.exports = dbConnect;