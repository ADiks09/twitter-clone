import React, { FC } from 'react'
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'

interface IProps {
  open: boolean
  title: string
  content: string
  children: JSX.Element | JSX.Element[]
}
//todo added ability close dialog component
/**
 *
 * @param props - required props fro component
 * @param {boolean} props.open - value for opened dialog component
 * @param {string} props.title - text for dialog title
 * @param {string} props.content - text dialog content
 * @param {JSX.Element | JSX.Element[]} props.children - dialog actions buttons
 */
export const UniversalDialog: FC<IProps> = ({open, title, content, children}) => (
  <Dialog
    open={open}
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
    </DialogActions>
  </Dialog>
)

