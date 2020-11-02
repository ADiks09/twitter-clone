import express, { Request, Response } from 'express'
import { check, validationResult, Result } from 'express-validator'
import jwt from 'jsonwebtoken'
import bcryptjs from 'bcryptjs'
import User, { IUser } from '../models/User'
const router: express.Router = express.Router()
import dotenv from 'dotenv'
import { checkUser, requireAuth } from '../middleware/authCheker'
dotenv.config()

const JWT: string = process.env.ACCESS_TOKEN_SECRET || ''
const COOKIE_TITLE: string = process.env.COOKIE_TITLE || ''

const maxAge: number = 3 * 24 * 60 * 60
const createToken = (id: number) => {
  return jwt.sign({ id }, JWT, {
    expiresIn: maxAge,
  })
}

router.post(
  '/register',
  [
    check('email', 'Email is not corrected').isEmail(),
    check('password', 'Min length 8 symbols').isLength({ min: 8 }),
  ],
  async (req: Request, res: Response) => {
    try {
      const errors: Result = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Auth has been failed',
        })
      }

      const { email, password } = req.body

      const candidate = await User.findOne({ email })

      if (candidate) {
        return res.status(400).json({ message: 'this person already exist' })
      }

      const hashedPassword: string = await bcryptjs.hash(password, 10)

      const user: IUser = new User({ email, password: hashedPassword })

      const token = createToken(user._id)

      res.cookie(COOKIE_TITLE, token, {
        httpOnly: true,
        maxAge: maxAge * 1000,
      })

      await user.save()

      res.status(201).json({ message: 'user created', user })
    } catch (error) {
      res.status(500).json({
        message: 'Something went wrong, try again',
        error: error.message,
      })
    }
  }
)

router.post(
  '/login',
  [
    check('email', 'Enter corrected email').normalizeEmail().isEmail(),
    check('password', 'Enter password').exists(),
    checkUser,
  ],
  async (req: Request, res: Response) => {
    try {
      if (res.locals.user) {
        res.status(400).json({ message: 'you already auth' })
      }
      const errors: Result = validationResult(req)

      if (!errors.isEmpty()) {
        return res.status(400).json({
          errors: errors.array(),
          message: 'Auth has been failed',
        })
      }

      const { email, password } = req.body
      const user: IUser | null = await User.findOne({ email })

      if (!user) {
        return res.status(400).json({ message: "User don't find" })
      }

      const isMatch = await bcryptjs.compare(password, user.password)

      if (!isMatch) {
        return res.status(400).json({ message: "Login data isn't correct" })
      }

      const token = createToken(user._id)
      res.cookie(COOKIE_TITLE, token, { httpOnly: true, maxAge: maxAge * 1000 })

      res.json({ token, userId: user.id })
    } catch (error) {
      res.send(500).json({
        message: 'Something went wrong, try again',
        error: error.message,
      })
    }
  }
)

router.get('/logout', requireAuth, async (req: Request, res: Response) => {
  res
    .status(200)
    .cookie(COOKIE_TITLE, '', { maxAge: 1 })
    .json({ message: 'logout' })
})

export { router as auth }
