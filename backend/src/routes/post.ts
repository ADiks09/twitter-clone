import express from 'express'
import { auth } from '../middleware/authCheker'
import Posts from '../models/Posts'
import { IPost } from '../interfaces'

const router = express.Router()

router.post('/create', auth, async (req, res) => {
  try {
    const user = res.locals.user

    if (!user) return new Error()

    const { text } = req.body

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

export { router as post }
