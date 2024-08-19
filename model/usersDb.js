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

const getUsersDb = async()=>{
    let [data] = await pool.query('SELECT* FROM fullstack.Users')
    return data
}
const getUserDb = async(username)=>{
    let [[data]] = await pool.query('SELECT * FROM fullstack.Users WHERE username = ?',[username])
    return data
}
const insertUserDb = async(name,surname,age,fav_coding_lang,fav_car,eye_color,username,password)=>{
    let [data] = await pool.query(`
        INSERT INTO fullstack.Users(name,surname,age,fav_coding_lang,fav_car,eye_color,username,password) VALUES(?,?,?,?,?,?,?,?)
        `,[name,surname,age,fav_coding_lang,fav_car,eye_color,username,password])
    return data
}
const deleteUserDb = async(id)=>{
    await pool.query('DELETE FROM fullstack.Users WHERE id=?',[id])
}
const updateUserDb = async(name,surname,age,fav_coding_lang,fav_car,eye_color,id)=>{
    console.log(id);
    
    let [data] = await pool.query(`
        UPDATE fullstack.Users SET name=?,surname=?, age=?, fav_coding_lang=?, fav_car=?, eye_color=?
        WHERE id=?
        `,
        [name,surname,age,fav_coding_lang,fav_car,eye_color,id])
    return data
}
export {getUsersDb,getUserDb,insertUserDb,deleteUserDb,updateUserDb}
// export default getUsersDb