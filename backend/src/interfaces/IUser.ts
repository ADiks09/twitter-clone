import { Document } from "mongoose"

export interface IToken {
  _id?: string
  token: string
}

export interface IUser extends Document {
  email: string
  password: string
  name: string
  phone: string
  firstName: string
  lastName: string
  birthday: Date
  tokens: Array<IToken>
  createdAt: Date
}
