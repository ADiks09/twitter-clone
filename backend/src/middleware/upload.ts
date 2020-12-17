import util from 'util'
import multer from 'multer'
import fs from 'fs'
const MAX_SIZE = 2 * 10024 * 1024

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads'
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir)
    }
    cb(null, dir)
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9)
    cb(null, uniqueSuffix + '-' + file.originalname)
  },
})

export const uploadFile = util.promisify(
  multer({
    storage,
    limits: { fieldSize: MAX_SIZE },
  }).single('file')
)
