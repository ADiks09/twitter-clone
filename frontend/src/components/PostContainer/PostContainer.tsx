import React, { FC } from 'react'
import classes from './post.module.scss'
import { Avatar } from '@material-ui/core'

type Props = {
  children: React.ReactNode,
  imgSrc: string,
}

export const PostContainer: FC<Props> = ({ children, imgSrc }) => (
  <div className={classes.container}>
    <Avatar className={classes.avatar} src={imgSrc} />
    <div style={{ width: '100%' }}>{children}</div>
  </div>
)
