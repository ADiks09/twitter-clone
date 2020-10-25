import mongoose, { Schema, Document } from "mongoose";

interface IUser extends Document {
	email: string,
	name: string
  }
  
const User: Schema = new Schema({
	email: {type: String, required: true},
	name: {type: String, required: true}
})

export default mongoose.model<IUser>('User', User)
