import Snackbar from '@mui/material/Snackbar'
import MuiAlert from '@mui/material/Alert'
import React from 'react'
import { alignments, messages } from '../lib/alertConstants'

const Alert = (props) => <MuiAlert elevation={6} variant='filled' {...props} />

const Notification = ({
  type,
  purpose,
  position,
  open,
  onClose,
  autoHide,
  className,
  customMessage
}) => (
  <Snackbar
    open={open}
    autoHideDuration={autoHide ? 6000 : false}
    onClose={autoHide ? onClose : false}
    anchorOrigin={alignments[position]}
  >
    <Alert
      className={className}
      severity={type}
      onClose={!autoHide ? onClose : undefined}
    >
      {customMessage || messages[purpose]}
    </Alert>
  </Snackbar>
)

export default Notification
