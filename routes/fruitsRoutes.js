import express from 'express'

import {fetchfruits,fetchfruit,insertfruit,deletefruit,updatefruit,addToCart} from '../controller/fruitsController.js'
import { verifyAToken } from '../middleware/authenticate.js'
import { addToCartDb } from '../model/fruitsDb.js'

const router=express.Router()

router.post('/cart',verifyAToken,addToCart)

// router.get('/',fetchfruits)



router.get('/',fetchfruits)
router.post('/fruit',insertfruit)

router
    .route('/:id')
        .get(fetchfruit)
        .delete(deletefruit)
        .patch(updatefruit)


export default router