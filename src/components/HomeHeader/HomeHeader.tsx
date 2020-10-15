import React from 'react'
import classes from './header.module.scss'
import { IconButton } from '@material-ui/core'

export const HomeHeader = ({ icon, title }) => (
  <div className={classes.scrollTop}>
    <span className={classes.homeTitle}>{title}</span>
    <IconButton className={classes.iconBtn}>{icon}</IconButton>
  </div>
)
