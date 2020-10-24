import React, { FC } from 'react'
import Button from '@material-ui/core/Button'

type btnData = {
  text: string,
  icon: JSX.Element
}

type Props = {
  buttonsData: Array<btnData>
  styles: any
}

export const MenuButtons: FC<Props> = ({ buttonsData, styles }) => {
  return (
    <>
      {buttonsData.map((btn, i) => (
        <Button
          key={i}
          size="large"
          className={styles}
          style={{ marginBottom: '10px' }}
          startIcon={btn.icon}
        >
          {btn.text}
        </Button>
      ))}
    </>
  )
}
