// import { createTheme, ThemeProvider } from '@mui/material/styles'
import MuiPagination from '@mui/material/Pagination'
import React from 'react'
import s from './index.module.css'

// define primary color for material UI component
// const theme = createTheme({
//   palette: {
//     type: 'light',
//     primary: {
//       main: '#3e3cef',
//       contrastText: '#fff'
//     }
//   },
//   typography: {
//     fontFamily: 'Nunito',
//     fontSize: 14
//   }
// })
// NOTE: Above code can be reused for other material UI components as well

const Pagination = ({
  page = 1,
  totalResults = 0,
  onChange = () => {},
  page_limit = 10
}) => {
  const handleChange = (event, value) => {
    event.preventDefault()
    onChange(value - 1)
  }

  const pages = Math.ceil(Number(totalResults) / page_limit)

  return (
    <div className={s.container}>
      {/* <ThemeProvider theme={theme}> */}
      <MuiPagination
        count={pages}
        color='primary'
        onChange={handleChange}
        page={page + 1}
        defaultPage={page}
      />
      {/* </ThemeProvider> */}
    </div>
  )
}

export default Pagination
