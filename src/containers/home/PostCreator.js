import React from 'react'
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

const btnData = [
  <ImageOutlined color="primary" />,
  <Gif color="primary" />,
  <EqualizerRounded color="primary" />,
  <SentimentSatisfiedRounded color="primary" />,
  <Event color="primary" />,
]

export const PostCreator = () => (
  <>
    <TextareaAutosize
      placeholder="Do you mind?"
      className={classes.input}
      rowsMax={7}
      maxLength={306}
    />

    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <span>
        {btnData.map((icon, index) => (
          <IconButton className={classes.iconBtn} key={index}>
            {icon}
          </IconButton>
        ))}
      </span>

      <Button className={classes.btn} variant="contained" color="primary">
        Tweet
      </Button>
    </div>
  </>
)
