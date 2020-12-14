import mongoose, { Schema } from 'mongoose'
import { IPost, IPosts } from '../interfaces'

const Post: Schema<IPost> = new Schema<IPost>({
  collectionId: { type: Schema.Types.ObjectId, ref: 'Posts' },
  text: String,
  createdAt: { type: Date, default: Date.now() },
})

const Posts: Schema<IPosts> = new Schema<IPosts>({
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  posts: [Post],
  createdAt: { type: Date, default: Date.now() },
})

export default mongoose.model<IPosts>('Posts', Posts)
