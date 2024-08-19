import {compare} from "bcrypt";
import { getUserDb } from "../model/usersDb.js";
import jwt from 'jsonwebtoken'
import {config} from "dotenv"
config()


const  checkUser= async(req,res,next)=>{
    const {username,password}=req.body;
    // let pass = await getUserDb(username)
    let hashedPassword = (await getUserDb(username)).password
    // console.log(hashedPassword);
    
    let result = await compare(password,hashedPassword)
    if(result==true){
        let token = jwt.sign({username:username},process.env.SECRET_KEY,{expiresIn:'1h'})
        req.body.token = token
        console.log(token);
        
        next()
            return 
        }else
        res.send('incorrect password')
   
}
const verifyAToken = (req,res,next)=>{
    let {cookie} = req.headers;
    // console.log(req.headers);
    // checks if the token exists first
    let token = cookie && cookie.split('=')[1];
    jwt.verify(token, process.env.SECRET_KEY,(err, decoded)=>{
        if(err){
            // console.log(err);
            res.json({message:'Token has expired'});
            return;
        }
        req.body.user = decoded.username
        // console.log(req.body);
        next();

    } )
}
export {checkUser,verifyAToken}