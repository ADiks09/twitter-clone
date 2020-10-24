import React, { FC } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import { SearchOutlined } from '@material-ui/icons'

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: 20,
    backgroundColor: '#253341',
    borderRadius: 30,
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 345,
    height: 36,
    '&:hover': {
      border: '1px solid #0c9ade',
    },
  },
  input: {
    color: 'white',
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    color: 'white',
    padding: 10,
  },
}))

export const CustomizedInputBase: FC = () => {
  const classes = useStyles()
  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <SearchOutlined />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search on Twitter"
        inputProps={{ 'aria-label': 'search on twitter' }}
      />
    </Paper>
  )
}
