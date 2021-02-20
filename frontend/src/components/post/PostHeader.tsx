import React from 'react'
import classes from './post.module.scss'
import { Link } from 'react-router-dom'
import { IconButton } from '@material-ui/core'
import { ExpandMoreRounded } from '@material-ui/icons'
import { IPostAuthor } from '../../interfaces/IPost'
import { parseDateForPost } from '../../services/helpers/date'

interface IProps {
  createdAt: Date
  author: Omit<IPostAuthor, 'avatarUrl'>
}

export const PostHeader: React.FC<IProps> = ({ author, createdAt }) => {
  return (
    <div className={classes.postHeader}>
        <span>
          <strong>{author.firstName}</strong>
          {' '}
          <strong>{author.lastName}</strong>
          <Link
            className={classes.userTag}
            to={`profile/${author.userName}`}
          >
            {`@${author.userName}`}
          </Link>
          <span className={classes.date}>
            <span style={{ marginRight: '5px' }}>{'\u2022'}</span>
            {parseDateForPost(createdAt)}
          </span>
        </span>
      <IconButton className={classes.iconBtn} style={{ padding: '2px' }}>
        <ExpandMoreRounded fontSize="small" color="primary"/>
      </IconButton>
    </div>
  )
}
