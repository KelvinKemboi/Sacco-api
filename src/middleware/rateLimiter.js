// key in the identification(userid/ ip address) and display upom reaching the rate limit
import ratelimit from "../config/upstash.js"

const rateLimiter = async (req,res,next) => {
    try{
        // place the userid or ip address to identify the user and limit them
        const {success}= await ratelimit.limit("my-rate-limit");
        if(!success){
            return res.status(429).json({message: "Too many requests, please try again later."});
        }
        next();
    }
    catch(error){
        console.log("Error in Rate Limit", error)
        next(error)
    }
}

export default rateLimiter;