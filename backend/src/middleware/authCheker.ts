import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
import User from '../models/User'
import { IUser } from '../interfaces'

dotenv.config()

const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || ''
const COOKIE_TITLE: string = process.env.COOKIE_TITLE || ''

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.cookies[COOKIE_TITLE]

    if (!token) {
      res.status(401).json({ message: 'You not authorized' })
    }

    const data: any = jwt.verify(token, ACCESS_TOKEN_SECRET)

    const user: IUser | null = await User.findOne({
      _id: data.id,
      'tokens.token': token,
    })

    if (!user) {
      throw new Error()
    }

    res.locals.user = user
    res.locals.token = token

    next()
  } catch (error) {
    res.status(401).json({
      message: 'Not authorized to access this resource',
      error: error.message,
    })
  }
}
