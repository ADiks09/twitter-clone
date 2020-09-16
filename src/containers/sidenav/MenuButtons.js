import React from 'react'
import Button from '@material-ui/core/Button'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
  btnSideNav: {
    borderRadius: '30px',
    marginBottom: '10px',
    color: 'white',
    textTransform: 'none',
    fontWeight: '700',

    '&:hover': {
      transition: 'all .2s',
      backgroundColor: '#5d9cec2e',
      color: '#4a89dc',
    },
  },
})

export const MenuButtons = ({ buttonsData }) => {
  const classes = useStyles()
  return (
    <>
      {buttonsData.map((btn, i) => (
        <Button
          key={i}
          size="large"
          className={classes.btnSideNav}
          startIcon={btn.icon}
        >
          {btn.text}
        </Button>
      ))}
    </>
  )
}
