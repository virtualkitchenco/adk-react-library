import Backdrop from '@mui/material/Backdrop'
import CircularProgress from '@mui/material/CircularProgress'
// import { makeStyles } from '@mui/material/styles'
import React from 'react'

// const useStyles = makeStyles((theme) => ({
//   backdrop: {
//     zIndex: theme.zIndex.drawer + 1,
//     color: '#fff'
//   }
// }))

const Loader = () => {
  // const classes = useStyles()

  return (
    <Backdrop
      // TODO: consider replacing sx w/ className implementation
      // className={classes.backdrop}
      sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open
    >
      <CircularProgress color='inherit' thickness={5} />
    </Backdrop>
  )
}

export default Loader
