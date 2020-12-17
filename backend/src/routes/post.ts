import express from 'express'
import { auth } from '../middleware/authCheker'
import Posts from '../models/Posts'
import { IPost } from '../interfaces'
import { uploadFile } from '../middleware/upload'

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
      const post: IPost = {
        text,
        collectionId: posts.id,
        media: req.file && [
          {
            originalName: req.file.originalname,
            url: req.file.filename,
            mediaType: req.file.mimetype,
            mediaSize: req.file.size,
          },
        ],
      }
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

router.get('/img/:name', async (req, res) => {
  res.sendFile(process.env.LOCAL_DIRECTORY_PATH + req.params.name, (e) =>
    res.status(500).json({ error: e.message, message: 'Error of return img' })
  )
})
export { router as post }
