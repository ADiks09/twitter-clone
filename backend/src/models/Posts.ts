import mongoose, { Schema } from 'mongoose'
import { IPost, IPosts } from '../interfaces'

const Media = new Schema(
  {
    mediaType: { type: String },
    mediaSize: { type: Number },
    url: { type: String, required: true },
    originalName: { type: String, required: true },
  },
  { _id: false }
)

const Post: Schema<IPost> = new Schema<IPost>({
  collectionId: { type: Schema.Types.ObjectId, ref: 'Posts' },
  text: { required: true, type: String },
  media: [Media],
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
