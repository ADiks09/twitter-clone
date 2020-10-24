import React, { FC } from 'react'
import classes from './header.module.scss'
import { IconButton } from '@material-ui/core'

type Props = {
  icon: React.ReactNode,
  title: string,
}

export const HomeHeader: FC<Props> = ({ icon, title }) => (
  <div className={classes.scrollTop}>
    <span className={classes.homeTitle}>{title}</span>
    <IconButton className={classes.iconBtn}>{icon}</IconButton>
  </div>
)
