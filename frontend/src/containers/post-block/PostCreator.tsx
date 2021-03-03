import React, { ChangeEvent, FC, useRef, useState } from 'react'
import { Badge, IconButton, Tooltip } from '@material-ui/core'
import {
  EqualizerRounded,
  Event,
  Gif,
  ImageOutlined,
  SentimentSatisfiedRounded,
} from '@material-ui/icons'
import classes from '../home/home.module.scss'
import TextareaAutosize from '@material-ui/core/TextareaAutosize'
import { useFormik } from 'formik'
import * as yup from 'yup'
import { Alert, AlertTitle } from '@material-ui/lab'
import { SubmitButton } from '../../components/SubmitButton'
import {
  $postCreateStore,
  createPostFx,
  resetSuccessfullyCreate,
} from '../../models/postCreate'
import { useStore } from 'effector-react'
import { IPostCreate } from '../../interfaces/IPost'

const btnData: JSX.Element[] = [
  <Gif color="primary" />,
  <EqualizerRounded color="primary" />,
  <SentimentSatisfiedRounded color="primary" />,
  <Event color="primary" />,
]

const validationSchema = yup.object<IPostCreate>({
  text: yup.string().required('Text your post is required'),
})

const initialValues: IPostCreate = {
  text: '',
  file: '',
}

export const PostCreator: FC = () => {
  const { successfully, loading } = useStore($postCreateStore)
  const inputFile = useRef<HTMLInputElement>(null)

  const [countUploads, setCountUploads] = useState(0)

  const handleOnSubmit = async (values: IPostCreate) => {
    await createPostFx(values)
    formik.resetForm()
    setCountUploads(0)
  }

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleOnSubmit,
  })

  const fileInputHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const files = event.currentTarget.files
    if (!files) return

    const types = ['jpeg', 'jpg', 'png']
    if (!types.find((t) => files[0].name.includes(t))) {
      alert("Your file type doesn't match")
      return
    }
    formik.setFieldValue('file', files[0])
    setCountUploads(countUploads + 1)
  }

  if (successfully.isSuccess) {
    setTimeout(() => {
      resetSuccessfullyCreate()
    }, 3000)

    return (
      <Alert
        severity="success"
        color="info"
        onClose={() => resetSuccessfullyCreate()}
      >
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>{successfully.message}</strong>
      </Alert>
    )
  }

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

          <Tooltip title="Upload images" placement="bottom">
            <IconButton
              className={classes.iconBtn}
              onClick={() => {
                const current = inputFile.current
                if (current) current.click()
              }}
            >
              <Badge badgeContent={countUploads} color="primary">
                <ImageOutlined color="primary" />
              </Badge>
            </IconButton>
          </Tooltip>
        </span>

        <input
          type="file"
          name="file"
          id="file"
          ref={inputFile}
          accept=".png, .jpg, .jpeg"
          onChange={fileInputHandler}
          style={{ display: 'none' }}
        />

        <SubmitButton loading={loading} classes={classes.btn} text="Tweet" />
      </div>
    </form>
  )
}
