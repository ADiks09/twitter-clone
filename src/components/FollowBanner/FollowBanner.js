import React from 'react'
import classes from './user-banner.module.scss'
import { Avatar, Button } from '@material-ui/core'

export const FollowBanner = ({ avatar, name, tag }) => (
  <div className={classes.container}>
    <Avatar src={avatar} />
    <div style={{ width: '170px' }}>
      <strong style={{ fontSize: '15px' }}>{name}</strong>
      <br />
      <span style={{ fontSize: '14px' }}>{tag}</span>
    </div>
    <Button
      variant="outlined"
      color="primary"
      style={{ borderRadius: '20px' }}
      size="small"
    >
      Follow
    </Button>
  </div>
)
