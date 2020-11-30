import express, { Request, Response } from 'express'
import { auth } from '../middleware/authCheker'

const router = express.Router()

router.get('/user', auth, async (req: Request, res: Response) => {
  try {
    const user = res.locals.user
    if (!user) throw new Error()
    res.status(200).json({
      user: {
        createdAt: user.createdAt,
        email: user.email,
        name: user.name,
        phone: user.phone,
        birthday: user.birthday,
        firstName: user.firstName,
        lastName: user.lastName,
      },
    })
  } catch (error) {
    res.status(500).json({
      message: 'Something went wrong, try again',
      error: error.message,
    })
  }
})

export { router as profile }
