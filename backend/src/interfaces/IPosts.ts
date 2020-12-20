import { Document, Schema } from 'mongoose'

interface IMedia {
  url: string
  originalName: string
  mediaType: string
}

export interface IPost {
  collectionId: Schema.Types.ObjectId
  text: string
  media?: Array<IMedia>
  createdAt?: Date
}

export interface IPosts extends Document {
  author: Schema.Types.ObjectId
  posts: [IPost]
  createdAt?: Date
}
