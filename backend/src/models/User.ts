import mongoose, { Schema, Document } from 'mongoose'

export interface IUser extends Document {
  email: string;
  password: string
  name?: string;
}

const User: Schema = new Schema({
  email: {
    type: String,
    required: true,
    unique: [true, 'This Email already exist']
  },
  name: { type: String },
  password: {type: String}
})

export default mongoose.model<IUser>('User', User)
