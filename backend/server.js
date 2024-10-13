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
import messageRoute from "./routes/message.routes.js"
app.use("/api/auth", authRoutes)
app.use("/api/messages",messageRoute)

// app.listen(3000,() => {
//     console.log("Server is running on port 3000");
// })
app.listen(PORT,() => {
    console.log("Server is running on port "+PORT);
})




//write in last
//error handler
app.use((err, req, res, next) => {
    const statusCode = err.statusCode || 500
    const message = err.message || "Internal Server Error"

    return res.status(statusCode).json({
        success: false,
        statusCode,
        message,
    })
})