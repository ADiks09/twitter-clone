import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import cors from 'cors'
import { auth } from './routes/auth'
import cookieParser from 'cookie-parser'
import { checkUser, requireAuth } from './middleware/authCheker'

dotenv.config()
const app: express.Application = express()
const PORT: number | string = process.env.PORT || 5000
const MONGO_URL: string = process.env.MONGO_URL || ''

app.use(cors())
app.use(bodyParser.json())
app.use(cookieParser())

app.use('/api/auth', auth)

app.get('/', requireAuth, async (_, res) => {
  res.send('Twitter API')
})

app.get('/user', checkUser, async (req, res) => {
  try {
    if (res.locals.user) {
      res.status(200).json({ user: res.locals.user })
    }
    res.status(401).json({ message: "You don't authorized" })
  } catch (error) {
    res
      .status(500)
      .json({
        message: 'Something went wrong, try again',
        error: error.message,
      })
  }
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
