import React, { FC, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Twitter } from '@material-ui/icons'
import * as yup from 'yup'
import classes from './login.module.scss'
import {
  IFullUserState,
  IUser,
  LoadingStatus,
} from '../../store/ducks/user/state'
import { userFetchLogin } from '../../store/ducks/user/actionsCreators'
import { useDispatch, useSelector } from 'react-redux'
import { IRootReducer } from '../../store/rootReducer'
import CircularProgress from '@material-ui/core/CircularProgress'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Redirect } from 'react-router-dom'
import { CustomTextField } from '../../services/components/CustomTextField'

const validationSchema = yup.object<IUser>({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const initialValue: IUser = {
  email: '',
  password: '',
}

const SubmitForm: FC = () => {
  const dispatch = useDispatch()
  const auth: IFullUserState = useSelector((state: IRootReducer) => state.auth)

  const [isError, setIsError] = useState(false)
  const [isRedirect, setIsRedirect] = useState(false)

  useEffect(() => {
    setIsError(auth.loading === LoadingStatus.ERROR)
    setIsRedirect(auth.loading === LoadingStatus.LOADED)
  }, [auth.loading])

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: async (values: IUser) => dispatch(userFetchLogin(values)),
  })

  return (
    <>
      {isError && (
        <Alert
          onClose={() => setIsError(false)}
          severity="error"
          style={{ marginBottom: 30 }}
        >
          <AlertTitle>Login failed</AlertTitle>
          <strong>{auth.requestError.message}!</strong>
        </Alert>
      )}
      {isRedirect && <Redirect to="/home" />}
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.wrapper}>
          <CustomTextField
            color="primary"
            variant="outlined"
            name="email"
            label="Email"
            style={{ width: 548 }}
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <CustomTextField
            label="Password"
            color="primary"
            variant="outlined"
            name="password"
            style={{ width: 548 }}
            value={formik.values.password}
            onChange={formik.handleChange}
            className={classes.input}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
          />
        </div>
        <Button
          className={classes.btn}
          variant={'contained'}
          color={'primary'}
          type="submit"
          disabled={auth.loading === LoadingStatus.LOADING}
        >
          {auth.loading === LoadingStatus.LOADING ? (
            <CircularProgress />
          ) : (
            'Log in'
          )}
        </Button>
      </form>
    </>
  )
}

export const LogInForm: FC = () => {
  return (
    <Container component="main" maxWidth="sm">
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '50px 0 20px 0',
        }}
      >
        <Twitter color="inherit" className={classes.logo} />
        <Typography style={{ fontSize: 26, fontWeight: 700 }}>
          Log in to Twitter
        </Typography>
      </div>
      <SubmitForm />
    </Container>
  )
}
