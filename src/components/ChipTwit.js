import React, { useState } from 'react'
import { Avatar } from '@material-ui/core'
import makeStyles from '@material-ui/core/styles/makeStyles'

const useStyles = makeStyles({
  chip: {
    display: 'flex',
    alignItems: 'center',
    width: '250px',
    padding: '7px 10px',
    flexBasis: 'auto',
    borderRadius: '30px',
    justifyContent: 'space-between',
    '&:hover': {
      transition: 'all .2s',
      backgroundColor: '#5d9cec2e',
    },
  },

  usersChip: {
    display: 'flex',
    justifyContent: 'space-between',
  },

  avatar: {
    width: '35px',
    height: '35px',
  },

  userNames: {
    marginLeft: '10px',
    fontSize: '14px',
    display: 'flex',
    flexDirection: 'column',
  },

  name: {
    fontWeight: '700',
    marginBottom: '3px',
  },

  tag: {
    color: 'gray',
  },
})

export const ChipTwit = ({ name, tag, img, btn, btnActive, classname }) => {
  const [click, setClick] = useState(false)
  const classes = useStyles()
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
