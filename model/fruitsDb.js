// import {pool} from '../config/config.js'
import {createPool} from 'mysql2/promise'
import {config} from 'dotenv'
config()

const pool=createPool({
host:process.env.HOST,
user:process.env.USER,
password:process.env.PASSWORD,
database: process.env.DATABASE

})

const getfruitsDb = async()=>{
    let [data] = await pool.query('SELECT* FROM fullstack.fruits')
    return data
}
const getfruitDb = async(id)=>{
    let [[data]] = await pool.query('SELECT* FROM fullstack.fruits WHERE id = ?',[id])
    return data
}
const insertfruitDb = async(fruit_name,weight,amount)=>{
    let [data] = await pool.query(`
        INSERT INTO fullstack.fruits(fruit_name,weight,amount) VALUES(?,?,?)
        `,[fruit_name,weight,amount])
    return data
}
const deletefruitDb = async()=>{
    await pool.query('DELETE FROM fullstack.fruits WHERE id=?',[id])
}
const updatefruitDb = async(fruit_name,weight,amount,id)=>{
    let [data] = await pool.query(`
        UPDATE fullstack.fruits SET fruit_name=?,weight=?,amount?
        WHERE id=?
        `,
        [fruit_name,weight,amount,id])
    return data
}
const addToCartDb= async(fruit_id,user_id)=>{
   await pool.query(`
        INSERT INTO fullstack.cart(fruit_id,user_id) VALUES(?,?)
        `,[fruit_id,user_id])
   

}

export {getfruitsDb,getfruitDb,insertfruitDb,deletefruitDb,updatefruitDb, addToCartDb}
