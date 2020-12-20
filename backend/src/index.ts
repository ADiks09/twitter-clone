import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import { auth } from './routes/auth'
import { profile } from './routes/profile'
import { post } from './routes/post'
import multer from 'multer'

dotenv.config()

const app: express.Application = express()

const PORT: number | string = process.env.PORT || 5000
const MONGO_URL: string = process.env.MONGO_URL || ''

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())
//TODO removed maybe
app.use(express.static(__dirname))

app.use('/api/auth', auth)
app.use('/api/profile', profile)
app.use('/api/post', post)

app.get('/', async (_, res) => {
  res.send('Twitter API')
})

const mongoOption: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
}

mongoose
  .connect(MONGO_URL, mongoOption)
  .then(() => console.log('Connection to DB has been successful'))
  .catch((error) =>
    console.log('Connection has been start with error: ', error.message)
  )

app.listen(PORT, () => {
  console.log('server has been started: ', PORT)
})
