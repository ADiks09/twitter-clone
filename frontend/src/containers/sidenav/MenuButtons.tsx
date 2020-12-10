import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import { Hidden, IconButton, Tooltip, useMediaQuery } from '@material-ui/core'
import { screenTablet } from '../../services/material/mediaQuery'

type btnData = {
  text: string,
  icon: JSX.Element
}

type Props = {
  buttonsData: Array<btnData>
  styles: any
}

export const MenuButtons: FC<Props> = ({ buttonsData, styles }) => {
  const matches = useMediaQuery(screenTablet())
  return (
    <>
      {buttonsData.map((btn, i) => (
        matches ? <Button
            key={i}
            size="large"
            className={styles}
            style={{ marginBottom: '10px' }}
            startIcon={btn.icon}
          >
            {btn.text}
          </Button>
          : <Tooltip title={btn.text} >
            <IconButton
              key={i}
              className={styles}
              style={{ marginBottom: '10px' }}
            >
              {btn.icon}
            </IconButton>
          </Tooltip>
      ))}
    </>
  )
}
