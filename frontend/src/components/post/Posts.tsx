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
import { IPostGet } from '../../store/ducks/post/actions/IPost'
import { Skeleton } from '@material-ui/lab'

interface IProps extends IPostGet {
  loading: boolean;
}

//todo avatar userName userTag time
export const Posts: FC<IProps> = ({ loading, text, createdAt, media }) => {
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
                {'@undefined'} : {'1 min'}
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
            height="300"
            className={classes.postDescription}
          />
        )}
        <p className={classes.postDescription}>{text}</p>
        {media &&
          media.map((m) => (
            <img
              className={classes.postMedia}
              src={'api/post/img/minify/' + m.url}
              alt={m.originalName}
            />
          ))}
        <div className={classes.wrapBtn}>
          {loading ? (
            <>
              <Skeleton
                animation="wave"
                variant="rect"
                width={72}
                height={26}
                style={{ borderRadius: '10px', marginLeft: '5px' }}
              />
              <Skeleton
                animation="wave"
                variant="rect"
                width={72}
                height={26}
                style={{ borderRadius: '10px', marginLeft: '5px' }}
              />
              <Skeleton
                animation="wave"
                variant="rect"
                width={72}
                height={26}
                style={{ borderRadius: '10px', marginLeft: '5px' }}
              />
            </>
          ) : (
            <>
              <Button
                className={classes.btnAction}
                startIcon={
                  <InsertCommentOutlined fontSize="small" color="primary" />
                }
              >
                {'3,3 тыс'}
              </Button>

              <Button
                className={classes.btnAction}
                startIcon={<RepeatOutlined fontSize="small" color="primary" />}
              >
                {'30,1 тыс.'}
              </Button>
              <Button
                className={classes.btnAction}
                startIcon={
                  <FavoriteBorderOutlined fontSize="small" color="primary" />
                }
              >
                {300}
              </Button>
            </>
          )}

          <IconButton className={classes.iconBtn}>
            <SystemUpdateAltOutlined fontSize="small" color="primary" />
          </IconButton>
        </div>
      </PostContainer>
    </div>
  )
}
