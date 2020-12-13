import React, { FC, useState } from 'react'
import { Avatar, useMediaQuery } from '@material-ui/core'
import classes from './chip.module.scss'
import { screenTablet } from '../../services/material/mediaQuery'

type Props = {
  name: string,
  tag: string,
  img: string,
  btnActive: React.ReactNode,
  btn: React.ReactNode
  classname: string
}

export const ChipTwit: FC<Props> = ({ name, tag, img, btn, btnActive, classname }) => {
  const [click, setClick] = useState<boolean>(false)

  const styles = classes.chip + ' ' + classname

  const matches = useMediaQuery(screenTablet())

  return (
    <>
      {
        matches ? <div className={styles} onClick={() => setClick(!click)}>
          <div className={classes.usersChip}>
            <Avatar className={classes.avatar} src={img}/>
            <div className={classes.userNames}>
              <span className={classes.name}>{name}</span>
              <span className={classes.tag}>{tag}</span>
            </div>
          </div>
          {click ? btnActive : btn}
        </div> : <Avatar className={classes.avatar} src={img}/>
      }
    </>
  )
}
