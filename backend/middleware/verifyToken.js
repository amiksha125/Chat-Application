
import { errorHandler } from "../utils/error.js"
import jwt from "jsonwebtoken"

export const isAuthenticate = async(req, res, next) =>{
    try{
     const token = req.cookies.access_token //gain access_token from cookies

     if(!token){ //if not token 
        return next(errorHandler(401, "Unauthorized"))
     }
     jwt.verify(token, process.env.JWT_SECRET, (err, user) => { //if tken is there, verify
        if(err){
            return next(errorHandler(403, "Forbidden")) //if error got
        }
        req.user = user //if not error  store user

        next() // call sendMessage
     })
   
    } catch(error){
        next(error)
    }
}