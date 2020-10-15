import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import classes from './chip.module.scss'

export const ChipTwit = ({ name, tag, img, btn, btnActive, classname }) => {
  const [click, setClick] = useState(false)
  const styles = classes.chip + ' ' + classname

  return (
    <div className={styles} onClick={() => setClick(!click)}>
      <div className={classes.usersChip}>
        <Avatar className={classes.avatar} src={img} />
        <div className={classes.userNames}>
          <span className={classes.name}>{name}</span>
          <span className={classes.tag}>{tag}</span>
        </div>
      </div>
      {click ? btnActive : btn}
    </div>
  )
}
