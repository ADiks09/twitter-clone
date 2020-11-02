import jwt, { VerifyErrors } from 'jsonwebtoken'
import User from '../models/User'
import { NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()

const ACCESS_TOKEN_SECRET: string = process.env.ACCESS_TOKEN_SECRET || ''
const COOKIE_TITLE: string = process.env.COOKIE_TITLE || ''

export const requireAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const token = req.cookies[COOKIE_TITLE]

  if (token) {
    jwt.verify(
      token,
      ACCESS_TOKEN_SECRET,
      (err: VerifyErrors | null, decodedToken: any | undefined) => {
        if (err) {
          console.log('message', err.message)
        } else {
          console.log('decoded token', decodedToken)
          next()
        }
      }
    )
  } else {
    res.status(401).json({ message: "You don't have a token" })
  }
}

// check current user
export const checkUser = (req: Request, res: Response, next: NextFunction) => {
  const token = req.cookies[COOKIE_TITLE]
  if (token) {
    jwt.verify(
      token,
      ACCESS_TOKEN_SECRET,
      async (err: VerifyErrors | null, decodedToken: any) => {
        if (err) {
          res.locals.user = null
          next()
        } else {
          res.locals.user = await User.findById(decodedToken.id)
          next()
        }
      }
    )
  } else {
    res.locals.user = null
    next()
  }
}
