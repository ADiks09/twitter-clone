import React from 'react'
import classes from './post.module.scss'
import { PostContainer } from '../post-container/PostContainer'
import { Skeleton } from '@material-ui/lab'
import { IconButton } from '@material-ui/core'
import { ExpandMoreRounded, SystemUpdateAltOutlined } from '@material-ui/icons'

export const PostSkeleton = () => (
  <div className={classes.container}>
    <PostContainer imgSrc="" loading={true}>
      <div className={classes.postHeader}>
        <Skeleton
          animation="wave"
          variant="text"
          width="60%"
          style={{ marginBottom: 6 }}
        />
        <IconButton className={classes.iconBtn} style={{ padding: '2px' }}>
          <ExpandMoreRounded fontSize="small" color="primary" />
        </IconButton>
      </div>
      <Skeleton
        animation="wave"
        variant="rect"
        height="200px"
        className={classes.postDescription}
        style={{ borderRadius: '20px' }}
      />
      <div className={classes.wrapBtn}>
        <Skeleton
          animation="wave"
          variant="text"
          width="100%"
          style={{ borderRadius: '10px' }}
        />
        <IconButton className={classes.iconBtn}>
          <SystemUpdateAltOutlined fontSize="small" color="primary" />
        </IconButton>
      </div>
    </PostContainer>
  </div>
)
