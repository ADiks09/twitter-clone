import React, { FC } from 'react'
import { useFormik } from 'formik'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import { Twitter } from '@material-ui/icons'
import TextField from '@material-ui/core/TextField'
import { withStyles } from '@material-ui/core'
import axios from 'axios'
import * as yup from 'yup'
import classes from './login.module.scss'

const CustomTextField = withStyles({
  root: {
    marginBottom: 20,
    '& label.Mui-focused': {
      color: '#0c9ade',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: '#0c9ade',
    },
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#0c9ade',
      },
      '&:hover fieldset': {
        borderColor: '#0c9ade',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#0c9ade',
      },
    },
  },
})(TextField)

interface ILogin {
  email: string;
  password: string;
}

const validationSchema = yup.object<ILogin>({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
})

const initialValue: ILogin = {
  email: '',
  password: '',
}

const submitForm = async (values: ILogin): Promise<void | Promise<any>> => {
  const { email, password } = values
  await axios
    .post('/api/auth/login', {
      email,
      password,
    })
    .then((response) => {
      alert(response.data.message)
    })
    .catch((error) => {
      if (error.response) {
        alert(error.response.data.message)
        console.log(error.response.status)
        console.log(error.response.headers)
      } else if (error.request) {
        console.log(error.request)
      } else {
        console.log('Error', error.message)
      }
    })
}

const SubmitForm: FC = () => {
  const formik = useFormik({
    initialValues: initialValue,
    validationSchema: validationSchema,
    onSubmit: submitForm,
  })

  return (
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
      >
        Log in
      </Button>
    </form>
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
