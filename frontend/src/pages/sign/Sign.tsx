import React, { FC, useEffect, useState } from 'react'
import classes from '../login/login.module.scss'
import { useDispatch, useSelector } from 'react-redux'
import {
  IFullUser,
  IFullUserState,
  LoadingStatus,
} from '../../store/ducks/user/state'
import { IRootReducer } from '../../store/rootReducer'
import { useFormik } from 'formik'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Link, Redirect } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import { CustomTextField } from '../../services/components/CustomTextField'
import * as yup from 'yup'
import { userFetchSignIn } from '../../store/ducks/user/actions/action'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import 'date-fns'
import DateFnsUtils from '@date-io/date-fns'
import { UniversalDialog } from '../../services/components/Dialog'
import { Field } from './Field'

const validationSchema = yup.object<IFullUser>({
  firstName: yup
    .string()
    .required('First name is required')
    .min(5, 'Last name should be of minimum 5 characters length'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(5, 'Last name should be of minimum 5 characters length'),
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
  lastName: '',
  firstName: '',
  email: '',
  password: '',
  phone: '',
  birthday: new Date('2014-08-18T21:11:54'),
  name: '',
}

// todo fix redirect to log in with react store
export const Sign: FC = () => {
  const dispatch = useDispatch()
  const auth: IFullUserState = useSelector((state: IRootReducer) => state.auth)

  const [isError, setIsError] = useState(false)
  const [isRedirect, setIsRedirect] = useState(false)

  useEffect(() => {
    setIsError(auth.loading === LoadingStatus.ERROR)
    setIsRedirect(auth.loading === LoadingStatus.LOADED)
  }, [auth.loading])

  const formik = useFormik<IFullUser>({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: async (values: IFullUser) => dispatch(userFetchSignIn(values)),
  })

  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date('2014-08-18T21:11:54')
  )

  const handleDateChange = (date: Date | null): void => {
    setSelectedDate(date)
    if (date) {
      formik.values.birthday = date
    }
  }

  return (
    <>
      {isError && (
        <Alert
          onClose={() => setIsError(false)}
          severity="error"
          style={{ marginBottom: 30 }}
        >
          <AlertTitle>Sign in failed</AlertTitle>
          <strong>{auth.requestError.message}!</strong>
        </Alert>
      )}
      <UniversalDialog
        open={isRedirect}
        content="Go to the login page to confirm"
        title="You have successfully registered"
      >
        <Button color="primary">
          <Link onClick={() => setIsRedirect(false)} to="/login">
            To login
          </Link>
        </Button>
      </UniversalDialog>
      <form onSubmit={formik.handleSubmit}>
        <div className={classes.wrapper}>
          <Field
            name="email"
            label="Email"
            formik={formik}
            value={formik.values.email}
            errors={formik.errors.email}
            touched={formik.touched.email}
          />
          <Field
            name="password"
            label="Password"
            formik={formik}
            value={formik.values.password}
            errors={formik.errors.password}
            touched={formik.touched.password}
          />
          <Field
            name="name"
            label="Name"
            formik={formik}
            value={formik.values.name}
            errors={formik.errors.name}
            touched={formik.touched.name}
          />
          <Field
            name="phone"
            label="Phone"
            formik={formik}
            value={formik.values.phone}
            errors={formik.errors.phone}
            touched={formik.touched.phone}
          />
          <Field
            name="firstName"
            label="First Name"
            formik={formik}
            value={formik.values.firstName}
            errors={formik.errors.firstName}
            touched={formik.touched.firstName}
          />
          <Field
            name="lastName"
            label="Last Name"
            formik={formik}
            value={formik.values.lastName}
            errors={formik.errors.lastName}
            touched={formik.touched.lastName}
          />
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <KeyboardDatePicker
              name="birthday"
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
              value={selectedDate}
              onChange={handleDateChange}
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
