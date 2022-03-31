import { makeStyles } from '@mui/styles'
// import { makeStyles } from '@mui/material/styles'

export const styleTable = makeStyles({
  root: {
    width: '100%'
  },
  container: {
    height: 'auto'
  },
  headerCell: {
    backgroundColor: '#eeeeee',
    textTransform: 'uppercase',
    fontFamily: 'Nunito',
    fontSize: '14px',
    fontWeight: '600',
    lineHeight: '19px',
    padding: '20px 16px',
    cursor: 'pointer'
  },
  cell: {
    fontFamily: 'Nunito',
    fontSize: '14px',
    lineHeight: '19px',
    padding: '15px 16px'
  },
  firstCol: {
    paddingLeft: '35px'
  },
  lastCol: {
    paddingRight: '35px'
  },
  disabled: {
    cursor: 'no-drop'
  },
  default: {
    cursor: 'default'
  },
  icon: {
    height: '50px',
    width: '50px'
  }
})

export const button = makeStyles({
  primary: {
    backgroundColor: '#3e3cef',
    color: '#ffffff',
    height: '40px',
    textTransform: 'uppercase',
    fontFamily: 'Nunito',
    fontSize: '14px',
    lineHeight: '19px',
    borderRadius: '5px',
    padding: '0 20px',
    '&:hover': {
      backgroundColor: '#3f51b5'
    },
    '&:disabled': {
      color: 'rgba(0, 0, 0, 0.26)',
      boxShadow: 'none',
      backgroundColor: 'rgba(0, 0, 0, 0.12)'
    }
  },
  secondary: {
    backgroundColor: '#ffffff',
    color: '#3e3cef',
    height: '40px',
    textTransform: 'uppercase',
    fontFamily: 'Nunito',
    fontSize: '14px',
    lineHeight: '19px',
    borderRadius: '5px',
    padding: '0 20px',
    border: '1px solid #E5E5E5',
    '&:hover': {
      backgroundColor: '#dad9ff'
    }
  },
  link: {
    color: '#000000',
    fontFamily: 'Nunito',
    fontSize: '14px',
    transition: 'all 0.2s linear',
    textTransform: 'uppercase',
    '&:hover': {
      textDecoration: 'underline',
      color: '#3e3cef'
    }
  }
})
