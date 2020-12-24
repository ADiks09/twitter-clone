import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

interface IProps {
  loading: boolean
  text: string
  classes?: any
  onClick?: () => void
}

/**
 * This component button with type 'submit' and with loader
 * @param props - props for this component
 * @param {boolean} props.loading - show loader if state equal true
 * @param {string} props.text - button text
 * @param {any} props.classes - classes for button
 * @param {function} props.onClick - handle event click for button
 */
export const SubmitButton: FC<IProps> = ({onClick, loading, classes, text}) => (
  <Button
    onClick={onClick}
    className={classes}
    type='submit'
    variant='contained'
    color='primary'
    disabled={loading}
  >
    {loading ? (
      <CircularProgress />
    ) : (
      text
    )}
  </Button>
)

