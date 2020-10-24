import React, { FC } from 'react'
import classes from './baner.module.scss'
import { Button, IconButton } from '@material-ui/core'
import { Settings } from '@material-ui/icons'

type Props = {
  children: JSX.Element[] | JSX.Element,
  title: string,
  headerButton?: boolean,
}

export const Banner: FC<Props> = ({ children, title, headerButton }) => (
  <div className={classes.bannerContainer}>
    <div className={classes.header}>
      <h3 className={classes.title}>{title}</h3>
      {headerButton ? (
        <IconButton className={classes.iconBtn} style={{ padding: '5px' }}>
         <Settings color="primary" />
        </IconButton>
      ) : (
       ' '
      )}
    </div>
    <div>{children}</div>
    <Button className={classes.btnBottom}>Show more</Button>
  </div>
)
