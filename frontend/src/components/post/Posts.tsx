import React, { FC } from 'react'
import { Button, IconButton } from '@material-ui/core'
import {
  ExpandMoreRounded,
  FavoriteBorderOutlined,
  InsertCommentOutlined,
  RepeatOutlined,
  SystemUpdateAltOutlined,
} from '@material-ui/icons'
import { PostContainer } from '../post-container/PostContainer'
import classes from './post.module.scss'

type Props = {
  imgUrl?: string,
  text?: string,
  userName?: string,
  userTag?: string,
  time?: string,
  avatar?: string,
  like?: string,
  comments?: string,
  share?: string,
}

export const Posts: FC<Props> = ({
  imgUrl,
  text,
  userName,
  userTag,
  time,
  avatar,
  like,
  comments,
  share,
}) => (
  <div className={classes.container}>
    <PostContainer imgSrc={avatar ? avatar : ' '}>
      <div className={classes.postHeader}>
        <span>
          <strong>{userName || 'No user'}</strong>
          <span className={classes.userTag}>
            {userTag || '@undefined'} : {time || '1 min'}
          </span>
        </span>
        <IconButton className={classes.iconBtn} style={{ padding: '2px' }}>
          <ExpandMoreRounded fontSize="small" color="primary" />
        </IconButton>
      </div>
      <p className={classes.postDescription}>{text}</p>
      {imgUrl ? <img className={classes.postMedia} src={imgUrl} alt="" /> : ''}
      <div className={classes.wrapBtn}>
        <Button
          className={classes.btnAction}
          startIcon={<InsertCommentOutlined fontSize="small" color="primary" />}
        >
          {comments || '3,3 тыс'}
        </Button>
        <Button
          className={classes.btnAction}
          startIcon={<RepeatOutlined fontSize="small" color="primary" />}
        >
          {share || '30,1 тыс.'}
        </Button>
        <Button
          className={classes.btnAction}
          startIcon={
            <FavoriteBorderOutlined fontSize="small" color="primary" />
          }
        >
          {like || 300}
        </Button>
        <IconButton className={classes.iconBtn}>
          <SystemUpdateAltOutlined fontSize="small" color="primary" />
        </IconButton>
      </div>
    </PostContainer>
  </div>
)
