import React, { FC, useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import { Twitter } from '@material-ui/icons'
import classes from '../login/login.module.scss'
import Typography from '@material-ui/core/Typography'
import { useDispatch, useSelector } from 'react-redux'
import {
  IFullUser,
  IFullUserState,
  LoadingStatus,
} from '../../store/ducks/user/state'
import { IRootReducer } from '../../store/rootReducer'
import { useFormik } from 'formik'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CustomTextField } from '../../services/components/CustomTextField'
import * as yup from 'yup'
import { userFetchSignIn } from '../../store/ducks/user/actionsCreators'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'

const validationSchema = yup.object<IFullUser>({
  birthday: yup.date(),
  name: yup
    .string()
    .required('Name is required')
    .min(5, 'Name should be of minimum 5 characters length'),
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  phone: yup
    .string()
    .min(9, 'Phone should be of minimum 9 characters length')
    .required('Phone is required'),
})

const initialValue: IFullUser = {
  email: '',
  password: '',
  phone: '',
  birthday: new Date('2014-08-18T21:11:54'),
  name: '',
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
    onSubmit: async (values: IFullUser) => dispatch(userFetchSignIn(values)),
  })

  return (
    <>
      {isError && (
        <Alert
          onClose={() => setIsError(false)}
          severity="error"
          style={{ marginBottom: 30 }}
        >
          <AlertTitle>Sign in failed</AlertTitle>
          This is an error alert —{' '}
          <strong>check the correctness of the entered data!</strong>
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
          <CustomTextField
            color="primary"
            variant="outlined"
            name="name"
            label="Name"
            style={{ width: 548 }}
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helperText={formik.touched.name && formik.errors.name}
          />
          <CustomTextField
            color="primary"
            variant="outlined"
            name="phone"
            label="Phone"
            style={{ width: 548 }}
            InputProps={{
              classes: {
                input: classes.input,
              },
            }}
            value={formik.values.phone}
            onChange={formik.handleChange}
            error={formik.touched.phone && Boolean(formik.errors.phone)}
            helperText={formik.touched.phone && formik.errors.phone}
          />
          {/*<CustomTextField*/}
          {/*  color="primary"*/}
          {/*  variant="outlined"*/}
          {/*  name="birthday"*/}
          {/*  label="Birthday"*/}
          {/*  style={{ width: 548 }}*/}
          {/*  InputProps={{*/}
          {/*    classes: {*/}
          {/*      input: classes.input,*/}
          {/*    },*/}
          {/*  }}*/}
          {/*  value={formik.values.birthday}*/}
          {/*  onChange={formik.handleChange}*/}
          {/*  error={formik.touched.birthday && Boolean(formik.errors.birthday)}*/}
          {/*  helperText={formik.touched.birthday && formik.errors.birthday}*/}
          {/*/>*/}
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              margin="normal"
              id="date-picker-dialog"
              label="Birthday"
              format="yyyy/MM/dd"
              style={{ width: 548 }}
              InputProps={{
                classes: {
                  input: classes.input,
                },
              }}
              // value={formik.values.birthday}
              // onChange={formik.handleChange}
              value={formik.values.birthday}
              onChange={formik.handleChange}
              KeyboardButtonProps={{
                'aria-label': 'change date',
              }}
              error={formik.touched.birthday && Boolean(formik.errors.birthday)}
              helperText={formik.touched.birthday && formik.errors.birthday}
            />
          </MuiPickersUtilsProvider>
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
            'Sign in'
          )}
        </Button>
      </form>
    </>
  )
}

export const Sign: FC = () => {
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
          Sign in to Twitter
        </Typography>
      </div>
      <SubmitForm />
    </Container>
  )
}