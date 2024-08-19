import {getfruitsDb,getfruitDb,insertfruitDb,deletefruitDb,updatefruitDb} from '../model/fruitsDb.js'
import { getUserDb } from '../model/usersDb.js';





const fetchfruits=async (req,res) => {
    console.log('yahoo successful mission');
    res.send(await getfruitsDb())
    

    
}
const fetchfruit=async (req,res) => {
    console.log('great work Olwethu 👌');
    res.send(await getfruitDb())
}   
const insertfruit=async (req,res) => {
    let {fruit_name,weight,amount} =req.body
        await insertfruitDb(fruit_name,weight,amount)
    console.log('great work mfana 👌');
    res.send(await getfruitsDb())
}   
const deletefruit=async (req,res) => {
    await deletefruitDb(req.params.id)
    res.send(await getfruitsDb())
    console.log('great work broe 👌');
}   
const updatefruit=async (req,res) => {
    let {fruit_name,weight,amount}=req.body
    let fruit=await getfruitDb(req.params.id)
    console.log(fruit)
    
    fruit_name?fruit_name :fruit_name=fruit.fruit_name
    weight?weight :weight=fruit.weight
    amount?amount:amount=fruit.amount
    
    await updatefruitDb(fruit_name,weight,amount,req.params.id)
    res.send(await getfruitsDb())
    console.log('great work son 👌');
}   
const addToCart= async (req,res)=>{
    console.log(req.body);
    let {id} =await getUserDb(req.body.user)
    console.log(id);
    await addToCart(req.body.id,id)
    res.json({message:"you've added to cart"})
}

export {fetchfruits,fetchfruit,insertfruit,deletefruit,updatefruit,addToCart}