import React from 'react'
import Container from '@material-ui/core/Container'
import { Twitter } from '@material-ui/icons'
import classes from './auth.module.scss'
import Typography from '@material-ui/core/Typography'

interface IProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

export const AuthPageWrapper: React.FC<IProps> = ({ title, children }) => (
  <Container component="main" maxWidth="sm">
    <div className={classes.wrapper}>
      <Twitter color="inherit" className={classes.logo} />
      <Typography className={classes.title}>{title}</Typography>
    </div>
    {children}
  </Container>
)
