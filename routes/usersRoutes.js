import express from 'express'
import {fetchUsers,fetchUser,insertUser,deleteUser,updateUser,loginUser} from '../controller/usersController.js'
import {checkUser} from '../middleware/authenticate.js'

const router=express.Router()
router.post('/login',checkUser,loginUser)

router.get('/',fetchUsers)
router.post('/',insertUser)

router
    .route('/:id')
        .get(fetchUser)
        .delete(deleteUser)
        .patch(updateUser)


export default router