import React, { FC, useEffect, useState } from 'react'
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

interface IProps {
  open: boolean
  title: string
  content: string
  children: JSX.Element | JSX.Element[]
  isClosed?: boolean
}

/**
 *
 * @param props - required props fro component
 * @param {boolean} props.open - value for opened dialog component
 * @param {string} props.title - text for dialog title
 * @param {string} props.content - text dialog content
 * @param {JSX.Element | JSX.Element[]} props.children - dialog actions buttons
 * @param {boolean | undefined} props.isClosed - default false, added ability closes dialog
 */
export const UniversalDialog: FC<IProps> = ({open, title, content, children, isClosed = false }) => {
  const [isOpen, setIsOpen] = useState(open)

  useEffect(() => {
    setIsOpen(open)
  }, [open])

  return (
    <Dialog
      open={isOpen}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {title}
      </DialogTitle>
      <DialogContent>
        <DialogContentText id="alert-dialog-description">
          {content}
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        {children}
        {isClosed && <Button color="primary" onClick={() => setIsOpen(false)}>
          Close
        </Button>}
      </DialogActions>
    </Dialog>
  )
}

