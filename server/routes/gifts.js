import express from 'express' //To create routes.
import giftData from '../data/gifts.js' //data that we created earlier in routes folder
import GiftsController from '../controllers/gifts.js'

const router = express.Router()

router.get('/', GiftsController.getGifts)

router.get('/:giftId', GiftsController.getGiftById)
export default router

