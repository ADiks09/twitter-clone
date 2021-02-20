import React, { FC, useEffect, useState } from 'react'
import { Alert, AlertTitle } from '@material-ui/lab'
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers'
import 'date-fns'
import { useFormik } from 'formik'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import * as yup from 'yup'
import DateFnsUtils from '@date-io/date-fns'
import { UniversalDialog } from '../../services/components/Dialog'
import { Field } from './Field'
import { SubmitButton } from '../../components/SubmitButton'
import classes from '../login/login.module.scss'
import { useStore } from 'effector-react'
import { $userSignStore, postUserSignFx } from '../../models/sigin'
import { IFullUser } from '../../interfaces/IUser'

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

const Sign: FC = () => {
  const { loading, error, signSuccessfully } = useStore($userSignStore)

  const [isError, setIsError] = useState(false)
  const [isRedirect, setIsRedirect] = useState(false)

  useEffect(() => {
    setIsError(!!error.message)
    setIsRedirect(signSuccessfully)
  }, [error, signSuccessfully])

  const formik = useFormik<IFullUser>({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: async (values: IFullUser) => postUserSignFx(values),
  })

  const [selectedDate, setSelectedDate] = useState<Date | null>(
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
          <strong>{error.message}!</strong>
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
        <SubmitButton loading={loading} text="Sign in" classes={classes.btn} />
      </form>
    </>
  )
}

export default Sign
