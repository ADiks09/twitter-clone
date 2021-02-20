
export interface IPostCreate {
  text: string
  file?: string
}

export interface IMedia {
  url: string
  originalName: string
}

export interface IPost {
  text: string
  createdAt: Date
  media?: IMedia[]
}

export interface IPostAuthor {
  userName: string
  avatarUrl: string
  firstName: string
  lastName: string
}

export interface IPostByUserNameCollection {
  posts: IPost[]
  author: IPostAuthor
  postsTotal: number
}



export interface IPostFetchCollectionPayload {
  userName: string,
  query: {
    limit: number | string
    skip: number | string
  }
}

