import mongoose, { Schema } from 'mongoose'
import { IUser } from '../interfaces'

const User: Schema = new Schema({
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: [true, 'Email already exist'],
  },
  phone: {
    required: [true, 'Phone is required'],
    type: String,
    unique: [true, 'Email already exist'],
    minlength: [10, 'Phone is not corrected'],
  },
  birthday: {
    required: [true, 'BirthDay is required'],
    type: Date,
    min: ['1910-01-01', 'Min date is not valid'],
    max: ['2020-01-01', 'Max date is not valid'],
  },
  name: {
    required: [true, 'Your name is required'],
    type: String,
  },
  password: {
    required: [true, 'password is required'],
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tokens: [
    {
      token: {
        type: String,
        required: [true, 'Token is required'],
      },
    },
  ],
})

export default mongoose.model<IUser>('User', User)
