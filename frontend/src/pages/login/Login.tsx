import React, { FC, useEffect, useState } from 'react'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import * as yup from 'yup'
import classes from './login.module.scss'
import { Alert, AlertTitle } from '@material-ui/lab'
import { Redirect } from 'react-router-dom'
import { CustomTextField } from '../../services/components/CustomTextField'
import { IFullUser, IUser } from '../../store/ducks/common'
import { $userLoginStore, postUserLoginFx } from '../../models/auth'
import { useStore } from 'effector-react'
import { CircularProgress } from '@material-ui/core'

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

const initialValue: IFullUser = {
  email: '',
  password: '',
  name: '',
  birthday: new Date('2014-08-18T21:11:54'),
  firstName: '',
  lastName: '',
  phone: '',
}

const LogInForm: FC = () => {
  const [isError, setIsError] = useState(false)

  const { error, loading, user } = useStore($userLoginStore)

  useEffect(() => {
    if (error) setIsError(true)
  }, [error])

  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: async (values: IFullUser) => await postUserLoginFx(values),
  })

  if (user.name) return <Redirect to="/home" />

  if (isError && error) {
    setTimeout(() => {
      setIsError(false)
    }, 3000)

    return (
      <Alert
        onClose={() => setIsError(false)}
        severity="error"
        style={{ marginBottom: 30, transition: '0.2s' }}
      >
        <AlertTitle>Login failed</AlertTitle>
        <strong>{error.response?.data.message}!</strong>
      </Alert>
    )
  }

  return (
    <>
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
          disabled={loading}
        >
          {loading ? <CircularProgress /> : 'Log in'}
        </Button>
      </form>
    </>
  )
}

export default LogInForm
