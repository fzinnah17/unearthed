import express from 'express' //To create routes.
import path from 'path' //  provides utilities for working with file and directory paths. It can be used to manipulate file paths, normalize them, join them together, and extract information such as the directory name, file name, and file extension.
import { fileURLToPath } from 'url' //utility function that converts a file URL to a file path. It takes a single argument, which is a file URL in the form of a string, and returns a file path in the form of a string. This function is useful when working with file URLs in Node.js, as many Node.js APIs expect file paths rather than file URLs.
import giftData from '../data/gifts.js' //data that we created earlier in routes folder
import GiftsController from '../controllers/gifts.js'

const __filename = fileURLToPath(import.meta.url) //contains the URL of the current module file. This URL can be used to determine the file path of the module file using the fileURLToPath function.
const __dirname = path.dirname(__filename)

const router = express.Router()

router.get('/', GiftsController.getGifts)

router.get('/:giftId', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router

