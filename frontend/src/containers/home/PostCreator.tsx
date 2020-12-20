import React, { FC } from 'react'
import { IconButton } from '@material-ui/core'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import Button from '@material-ui/core/Button'
import {
  EqualizerRounded,
  Event,
  Gif,
  ImageOutlined,
  SentimentSatisfiedRounded,
} from '@material-ui/icons'
import classes from './home.module.scss'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import { postRequestCreateAction } from '../../store/ducks/post/actions/action'
import { IPost } from '../../store/ducks/post/actions/IPost'

const btnData: JSX.Element[] = [
  <ImageOutlined color="primary" />,
  <Gif color="primary" />,
  <EqualizerRounded color="primary" />,
  <SentimentSatisfiedRounded color="primary" />,
  <Event color="primary" />,
]

export const PostCreator: FC = () => {
  const dispatch = useDispatch()
  const formik = useFormik({
    initialValues: {
      text: '',
    },
    onSubmit: async (values: IPost) =>
      dispatch(postRequestCreateAction(values)),
  })

  return (
    <form onSubmit={formik.handleSubmit}>
      <TextareaAutosize
        placeholder="Do you mind?"
        className={classes.input}
        rowsMax={7}
        maxLength={306}
        name="text"
        value={formik.values.text}
        onChange={formik.handleChange}
      />

      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginLeft: '-15px',
        }}
      >
        <span>
          {btnData.map((icon, index) => (
            <IconButton className={classes.iconBtn} key={index}>
              {icon}
            </IconButton>
          ))}
        </span>

        <Button
          onClick={() => formik.handleSubmit()}
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          Tweet
        </Button>
      </div>
    </form>
  )
}
