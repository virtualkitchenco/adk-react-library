import React from 'react'
import Button from '@mui/material/Button'

export const buttonVariant = {
  contained: 'contained',
  outlined: 'outlined',
  text: 'text'
}

export const buttonSize = {
  small: 'small',
  medium: 'medium',
  large: 'large'
}

export const buttonSx = {
  blue: {
    color: 'white',
    backgroundColor: '#1890ff'
  },
  gray: {
    color: 'white',
    backgroundColor: 'lightgray',
    '&:hover': { backgroundColor: 'darkgray' }
  }
}

export const defaultProps = {
  variant: buttonVariant.contained,
  size: buttonSize.medium
}

export const ButtonComponent = (props) => {
  const buttonProps = { ...defaultProps, ...props }
  delete buttonProps.log
  const onClickFn = () => {
    props.log()
    props.onClick()
  }
  return (
    <Button {...buttonProps} onClick={onClickFn}>
      {props.children}
    </Button>
  )
}
