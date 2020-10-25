import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import User from './models/User'

dotenv.config()
const app: express.Application = express()
const PORT: number | string = process.env.PORT || 5000
const MONGO_URL: string = process.env.MONGO_URL || ''

app.get('/', async (_, res) => {
  res.send('Twitter API')
})

app.get('/user', async (req, res) => {
  try {
    const candidate = await User.find()
    res.status(200).json({
      users: candidate,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

app.post('/user/:name/:email', async (req, res) => {
  try {
    const { name, email } = req.params
    const user = new User({
      email,
      name,
    })

    const newUser = await user.save()
    res.status(201).json({
      user: newUser,
    })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
})

const mongoOption: mongoose.ConnectionOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
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
