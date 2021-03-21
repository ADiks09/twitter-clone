import React, { FC } from 'react'
import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

interface IProps {
  loading: boolean
  text: string
  classes?: any
  onClick?: () => void
  disabled?: boolean
}

/**
 * This component button with type 'submit' and with loader
 * @param props - props for this component
 * @param {boolean} props.loading - show loader if state equal true
 * @param {string} props.text - button text
 * @param {any} props.classes - classes for button
 * @param {function} props.onClick - handle event click for button
 * @param {boolean} props.disabled - disable button
 */
export const SubmitButton: FC<IProps> = ({onClick, loading, classes, text, disabled = false}) => (
  <Button
    onClick={onClick}
    className={classes}
    type='submit'
    variant='contained'
    color='primary'
    disabled={loading || disabled}
  >
    {loading ? (
      <CircularProgress />
    ) : (
      text
    )}
  </Button>
)

