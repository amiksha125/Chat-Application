import User from "../models/user.model.js"

export const getUserForSidebar = async(req, res, next) =>{
    try{
            const loggedInUserId = req.user.id

            const allUserExceptLoggedIn = await User.find({
                _id: {$ne: loggedInUserId}, //ne = not equal
            }).select("-password") //except ne sabhi ko pass do

            res.status(200).json(allUserExceptLoggedIn)
    } catch(error){
        next(error)
    }
}