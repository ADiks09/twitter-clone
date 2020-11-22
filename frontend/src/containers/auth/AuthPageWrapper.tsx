import React from 'react'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import { Twitter } from '@material-ui/icons'
import classes from './auth.module.scss'

interface IProps {
  title: string;
  children: JSX.Element | JSX.Element[];
}

/**
 * renders a <AuthPageWrapper /> component for forms login or sign in
 * @param {Props} props - props
 * @param {string} props.title - text for Form
 * @param {JSX.Element | JSX.Element[]} props.children - component or components form
 */
export const AuthPageWrapper: React.FC<IProps> = ({ title, children }) => (
  <Container component="main" maxWidth="sm">
    <div className={classes.wrapper}>
      <Twitter color="inherit" className={classes.logo} />
      <Typography className={classes.title}>{title}</Typography>
    </div>
    {children}
  </Container>
)
