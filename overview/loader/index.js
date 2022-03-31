import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
import { makeStyles } from '@mui/material/styles'
import React from 'react'

const useStyles = makeStyles((theme) => ({
  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    color: '#fff'
  }
}))

const Loader = () => {
  const classes = useStyles()

  return (
    <Backdrop className={classes.backdrop} open>
      <CircularProgress color='inherit' thickness={5} />
    </Backdrop>
  )
}

export default Loader
