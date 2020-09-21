import React from 'react'
import classes from './post.module.scss'
import { Avatar } from '@material-ui/core'

export const PostContainer = ({ children, imgSrc }) => (
  <div className={classes.container}>
    <Avatar className={classes.avatar} src={imgSrc} />
    <div style={{ width: '100%' }}>{children}</div>
  </div>
)
