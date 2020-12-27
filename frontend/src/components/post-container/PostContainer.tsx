import React, { FC } from 'react'
import classes from './post.module.scss'
import { Avatar } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'

type Props = {
  children: React.ReactNode,
  imgSrc: string,
  loading?: boolean,
}

export const PostContainer: FC<Props> = ({
  children,
  imgSrc,
  loading = false,
}) => (
  <div className={classes.container}>
    {loading ? (
      <Skeleton animation="wave" variant="circle" className={classes.avatar} />
    ) : (
      <Avatar className={classes.avatar} src={imgSrc} />
    )}
    <div style={{ width: '100%' }}>{children}</div>
  </div>
)
