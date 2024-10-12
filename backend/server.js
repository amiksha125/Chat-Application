import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import cookieParser from "cookie-parser"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI).then(() =>{
console.log("Connected to mongoDB")
}).catch((err) => {
    console.log(err)
})


const PORT = process.env.PORT || 3000
app.get("/",(req,res) => {
    res.send("Hello World")
})


//import routes
import authRoutes from "./routes/auth.routes.js"
app.use("/api/auth", authRoutes)

// app.listen(3000,() => {
//     console.log("Server is running on port 3000");
// })
app.listen(PORT,() => {
    console.log("Server is running on port "+PORT);
})