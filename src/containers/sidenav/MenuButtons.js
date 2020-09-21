import React from 'react'
import Button from '@material-ui/core/Button'

export const MenuButtons = ({ buttonsData, styles }) => {
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
