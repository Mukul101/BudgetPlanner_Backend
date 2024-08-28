require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());
const MONGO_URI=process.env.MONGO_URI;
mongoose
    .connect(MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    .then(() => {
        console.log("Connection Successfull");
    })
    .catch((err) => {
        console.log(err);
    });
    
app.use("/api",require("./routes/register"))
app.use("/api/login",require("./routes/login"))
    const port=3000;
    app.listen(port,()=> {
        console.log(`server is running on port ${port}`);
    })


