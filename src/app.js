const mongoose = require("mongoose");
const express = require("express");
const app = express();
app.use(express.json());

const mongo_URI =
    "mongodb+srv://mukulbatra101:EqQjKinare5vU4So@budgetplanner.jq9cp.mongodb.net/?retryWrites=true&w=majority&appName=BudgetPlanner";
mongoose
    .connect(mongo_URI, {
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
    const port=3000;
    app.listen(port,()=> {
        console.log(`server is running on port ${port}`);
    })


