import React, { FC, useRef, useState } from 'react'
import { Badge, IconButton } from '@material-ui/core'
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
import { useDispatch, useSelector } from 'react-redux'
import { postRequestCreateAction } from '../../store/ducks/post/actions/action'
import { IPost } from '../../store/ducks/post/actions/IPost'
import * as yup from 'yup'
import { IRootReducer } from '../../store/rootReducer'
import { LoadingStatus } from '../../store/ducks/common'
import CircularProgress from '@material-ui/core/CircularProgress'

const btnData: JSX.Element[] = [
  <Gif color="primary" />,
  <EqualizerRounded color="primary" />,
  <SentimentSatisfiedRounded color="primary" />,
  <Event color="primary" />,
]

const validationSchema = yup.object<IPost>({
  text: yup.string().required('Text your post is required'),
})

const initialValues: IPost = {
  text: '',
  file: '',
}

export const PostCreator: FC = () => {
  const dispatch = useDispatch()

  const postCreate = useSelector((state: IRootReducer) => state.post.create)

  const inputFile = useRef<HTMLInputElement>(null)
  const [countUploads, setCountUploads] = useState(0)

  const handleOnSubmit = async (values: IPost) =>
    dispatch(postRequestCreateAction(values))

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleOnSubmit,
  })

  console.log(postCreate)

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

          <IconButton
            className={classes.iconBtn}
            onClick={() => {
              const current = inputFile.current
              if (current) current.click()
            }}
          >
            <Badge
              badgeContent={countUploads}
              color="primary"
              onClick={() => {}}
            >
              <ImageOutlined color="primary" />
            </Badge>
          </IconButton>
        </span>

        <input
          type="file"
          name="file"
          id="file"
          ref={inputFile}
          onChange={(event) => {
            const files = event.currentTarget.files
            if (files) {
              formik.setFieldValue('file', files[0])
              setCountUploads(countUploads + 1)
            }
          }}
          style={{ display: 'none' }}
        />

        <Button
          type="submit"
          className={classes.btn}
          variant="contained"
          color="primary"
        >
          {postCreate.loading === LoadingStatus.LOADING ? (
            <CircularProgress />
          ) : (
            'Tweet'
          )}
        </Button>
      </div>
    </form>
  )
}
