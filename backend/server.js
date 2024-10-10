import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"

dotenv.config()
const app = express()
mongoose.connect(process.env.MONGO_URI).then(() =>{
console.log("Connected to mongoDB")
}).catch((err) => {
    console.log(err)
})
const PORT = process.env.PORT || 3000
app.get("/",(req,res) => {
    res.send("Hello World")
})

// app.listen(3000,() => {
//     console.log("Server is running on port 3000");
// })
app.listen(PORT,() => {
    console.log("Server is running on port "+PORT);
})