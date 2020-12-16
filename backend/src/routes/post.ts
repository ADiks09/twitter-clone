import express from 'express'
import { auth } from '../middleware/authCheker'
import Posts from '../models/Posts'
import { IPost } from '../interfaces'
import { uploadFile } from '../middleware/upload'
import fs from 'fs'
import path from 'path'

const router = express.Router()

router.post('/create', auth, uploadFile, async (req, res) => {
  try {
    const user = res.locals.user

    if (!user) return new Error()

    const { text } = req.body

    if (req.file) {
      console.log('file exists', req.file)
    }

    const posts = await Posts.findOne({
      author: user.id,
    })

    if (posts) {
      const post: IPost = { text, collectionId: posts.id }
      posts.posts.push(post)
      await posts.save()
    } else {
      res.status(400).json({ message: "this posts collection don't find" })
    }

    res.status(201).json({ message: 'created', post: posts })
  } catch (e) {
    res.status(500).json({ error: e.message, message: 'Error' })
  }
})

router.get('/posts/:name', async (req, res) => {
  // const user = res.locals.user
  //
  // if (!user) return new Error()

  const directoryPath = 'D:\\Web-Project\\twitter-clone\\backend\\uploads\\'
  const fileName = req.params.name
  const result = directoryPath + fileName
  console.log(result)
  res.sendFile(result)
  //
  // fs.readdir(directoryPath, (err, files) => {
  //   if (err) {
  //     res.status(500 ).send({
  //       message: 'Unable to scan files!',
  //     })
  //   }
  //
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   const fileInfos = []
  //
  //   files.forEach((file) => {
  //     fileInfos.push({
  //       name: file,
  //       url: process.env.LOCAL_DEV_URL + file,
  //     })
  //   })
  //
  //   // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  //   // @ts-ignore
  //   res.status(200).send(fileInfos)
  // })
})
export { router as post }
