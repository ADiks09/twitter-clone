import express from 'express'
import dotenv from 'dotenv';
dotenv.config()
const app: express.Application = express()
const PORT: number | string = process.env.PORT || 5000

app.get('/', async (_, res) => {
  res.send('Twitter API')
})

app.listen(PORT, () => {
  console.log('server has been started: ', PORT)
})
