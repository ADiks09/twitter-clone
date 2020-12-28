import React, { FC } from 'react'
import {
  ExpandMoreRounded,
  FavoriteBorderOutlined,
  InsertCommentOutlined,
  RepeatOutlined,
  SystemUpdateAltOutlined,
} from '@material-ui/icons'
import { IconButton } from '@material-ui/core'
import { Skeleton } from '@material-ui/lab'
import { IPostGet } from '../../store/ducks/post/actions/IPost'
import { PostContainer } from '../post-container/PostContainer'
import { PostButton } from './PostButton'
import classes from './post.module.scss'

interface IProps extends IPostGet {
  loading: boolean;
}

//todo avatar userName userTag time
export const Post: FC<IProps> = ({ loading, text, createdAt, media }) => {
  return (
    <div className={classes.container}>
      <PostContainer imgSrc={' '} loading={loading}>
        <div className={classes.postHeader}>
          {loading ? (
            <Skeleton
              animation="wave"
              variant="text"
              width="60%"
              style={{ marginBottom: 6 }}
            />
          ) : (
            <span>
              <strong>{'No user'}</strong>
              <span className={classes.userTag}>
                {'@undefined'} * {/*todo fixed this shit*/}
                {new Date(createdAt).getHours() +
                  ':' +
                  new Date(createdAt).getMinutes()}
              </span>
            </span>
          )}
          <IconButton className={classes.iconBtn} style={{ padding: '2px' }}>
            <ExpandMoreRounded fontSize="small" color="primary" />
          </IconButton>
        </div>
        {loading && (
          <Skeleton
            animation="wave"
            variant="rect"
            height="200px"
            className={classes.postDescription}
            style={{ borderRadius: '20px' }}
          />
        )}
        <p className={classes.postDescription}>{text}</p>
        {media &&
          media.map((m, i) => (
            <img
              className={classes.postMedia}
              src={'api/post/img/minify/' + m.url}
              alt={m.originalName}
              key={i + m.originalName}
            />
          ))}
        <div className={classes.wrapBtn}>
          <PostButton
            loading={loading}
            content="3,3 тыс"
            icon={<InsertCommentOutlined fontSize="small" color="primary" />}
            className={classes.btnAction}
          />
          <PostButton
            icon={<RepeatOutlined fontSize="small" color="primary" />}
            content="30 тыс"
            loading={loading}
            className={classes.btnAction}
          />
          <PostButton
            icon={<FavoriteBorderOutlined fontSize="small" color="primary" />}
            content="300"
            loading={loading}
            className={classes.btnAction}
          />
          <IconButton className={classes.iconBtn}>
            <SystemUpdateAltOutlined fontSize="small" color="primary" />
          </IconButton>
        </div>
      </PostContainer>
    </div>
  )
}
