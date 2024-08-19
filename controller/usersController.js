import {getUsersDb,getUserDb,insertUserDb,deleteUserDb,updateUserDb} from '../model/usersDb.js'
import {hash} from 'bcrypt'
const fetchUsers=async (req,res) => {
    console.log('yahoo successful mission');
    res.send(await getUsersDb())
    
  
    
}
const fetchUser=async (req,res) => {
    res.send(await getUserDb())
    console.log('great work Olwethu 👌');
}   
const insertUser=async (req,res) => {
    let {name,surname,age,fav_coding_lang,fav_car,eye_color,username,password} =req.body
    hash(password,10,async(err,hashedP)=>{ //10 represents the salt

        if (err) throw err
        console.log(hashedP);
        
        await insertUserDb(name,surname,age,fav_coding_lang,fav_car,eye_color,username,hashedP)
        console.log('great work mfana 👌');
    })

    res.send(await getUsersDb())
}   
// alt of the above 

// const insertUser=async (req,res) => {
//     let {name,surname,age,fav_coding_lang,fav_car,eye_color,username,password} =req.body
//     let hashedP=hash(password,10

//         console.log(hashedP);
        
//         await insertUserDb(name,surname,age,fav_coding_lang,fav_car,eye_color,username,hashedP)
//         console.log('great work mfana 👌');
//     })

//     res.send(await getUsersDb())
// } 

const deleteUser=async (req,res) => {
    await deleteUserDb(req.params.id)
    res.send(await getUsersDb())
    console.log('great work broe 👌');
}   
const updateUser=async (req,res) => {
    let {name,surname,age,fav_coding_lang,fav_car,eye_color,username,password}=req.body
    let User=await getUserDb(req.params.id)
    console.log(User)
    
    name?name :name=User.name
    surname?surname :surname=User.surname
    age?age:age=User.age
    fav_coding_lang?fav_coding_lang :fav_coding_lang=User.fav_coding_lang
    fav_car?fav_car :fav_car=User.fav_car
    eye_color?eye_color:eye_color=User.eye_color
    username?username:username=User.username
    password?password:password=User.password
    
    await updateUserDb(name,surname,age,fav_coding_lang,fav_car,eye_color,req.params.id)
    res.send(await getUsersDb())
    console.log('great work son 👌');
}   
const loginUser= (req,res)=>{
    res.json({message:"you have signed in successfully!!",token:req.body.token})
}

export {fetchUsers,fetchUser,insertUser,deleteUser,updateUser,loginUser}