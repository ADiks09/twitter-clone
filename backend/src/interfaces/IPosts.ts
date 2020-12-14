import { Document, Schema } from 'mongoose'

export interface IPost {
  collectionId: Schema.Types.ObjectId
  text: string
  createdAt?: Date
}

export interface IPosts extends Document {
  author: Schema.Types.ObjectId
  posts: [IPost]
  createdAt?: Date
}
