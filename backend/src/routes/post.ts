import express from 'express'
import { auth } from '../middleware/authCheker'
import Posts from '../models/Posts'
import { IPost } from '../interfaces'
import { uploadFile } from '../middleware/upload'
import { minifyImage } from '../services/minifyImage'
import User from '../models/User'

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
      createdAt: Date.now(),
    }

    posts.posts.push(post)

    await posts.save()

    res.status(201).json({ message: 'post has been created', post })
  } catch (e) {
    res.status(500).json({ error: e.message, message: 'Error' })
  }
})

router.get('/postsByUserName/:userName', auth, async (req, res) => {
  try {
    const { userName } = req.params

    if (!userName) {
      return res.status(400).json({
        error: 'Value userName was not transferred',
        message: 'Try later please',
      })
    }

    const userCandidate = await User.findOne({ name: userName })

    if (!userCandidate) {
      return res.status(404).json({
        message: `User by this userName: ${userName} not find`,
      })
    }

    const postsCandidate = await Posts.findById(
      userCandidate.postsId,
      '-posts._id -posts.collectionId'
    )

    if (!postsCandidate) {
      return res.status(404).json({
        message: `User by this userName: ${userName} does not have a collection of posts`,
      })
    }

    res.status(200).json({
      posts: postsCandidate.posts.reverse(),
      author: { userName, avatarUrl: userName },
    })
  } catch (error) {
    res.status(500).json({ error: error.message, message: 'Error' })
  }
})

router.get('/img/minify/:name', async (req, res) => {
  res.sendFile(process.env.LOCAL_DIRECTORY_PATH + 'minify/' + req.params.name)
})
export { router as post }
