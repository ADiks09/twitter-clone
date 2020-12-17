import express from 'express'
import { auth } from '../middleware/authCheker'
import Posts from '../models/Posts'
import { IPost } from '../interfaces'
import { uploadFile } from '../middleware/upload'
import { minifyImage } from '../services/minifyImage'

const router = express.Router()

router.post('/create', auth, uploadFile, async (req, res) => {
  try {
    const user = res.locals.user

    if (!user) return new Error()

    const { text } = req.body

    if (req.file) minifyImage(req.file.filename)

    const posts = await Posts.findOne({
      author: user.id,
    })

    if (!posts) {
      return res
        .status(400)
        .json({ message: "this posts collection don't find" })
    }

    const post: IPost = {
      text,
      collectionId: posts.id,
      media: req.file && [
        {
          originalName: req.file.originalname,
          url: req.file.filename,
          mediaType: req.file.mimetype,
        },
      ],
    }
    posts.posts.push(post)

    await posts.save()

    res.status(201).json({ message: 'created', post })
  } catch (e) {
    res.status(500).json({ error: e.message, message: 'Error' })
  }
})

router.get('/img/minify/:name', async (req, res) => {
  res.sendFile(
    process.env.LOCAL_DIRECTORY_PATH + 'minify/' + req.params.name,
    (e) =>
      res.status(500).json({ error: e.message, message: 'Error of return img' })
  )
})
export { router as post }
