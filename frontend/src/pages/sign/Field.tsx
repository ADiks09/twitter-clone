import React, { FC } from 'react'
import { FormikProps } from 'formik'
import { CustomTextField } from '../../services/components/CustomTextField'
import classes from '../login/login.module.scss'
import { IFullUser } from '../../interfaces/IUser'

interface IProps {
  formik: FormikProps<IFullUser>
  value: string
  label: string
  name: string
  touched: boolean | undefined
  errors: string | undefined
}

export const Field: FC<IProps> = ({ name, label, value,formik, errors, touched }) => (
  <CustomTextField
    color="primary"
    variant="outlined"
    name={name}
    label={label}
    style={{ width: 548 }}
    InputProps={{
      classes: {
        input: classes.input,
      },
    }}
    value={value}
    onChange={formik.handleChange}
    error={touched && Boolean(errors)}
    helperText={touched && errors}
  />
)
