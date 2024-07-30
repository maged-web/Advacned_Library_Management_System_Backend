require('dotenv').config();
const express=require('express');
const cors=require('cors')
const app=express();
require('dotenv').config
const httpStatusText = require("./utils/httpStatusText")

const mongoose=require('mongoose');

mongoose.connect(process.env.URL)
.then(() => {
    console.log("connected to database successfully")
})
app.use(cors());
app.use(express.json());

const userRoute = require("./routes/user.route")


app.use("/users", userRoute)


app.all('*',(req,res,next)=>
{
    res.status(error.statusCode || 500).json({ status: error.statusText || httpStatusText.ERROR, msg: error.message, code: error.statusCode || 500, data: null })

})

app.use((error, req, res, next) => {
    res.status(error.statusCode || 500).json({ status: error.statusText || httpStatusText.ERROR, msg: error.message, code: error.statusCode || 500, data: null })
})

app.listen(process.env.PORT, () => {
    console.log("server is running on port 5000 successfully")
})