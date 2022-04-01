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
  size: buttonSize.medium,
  addAction: () => {}
}

export const ButtonComponent = (props) => {
  const buttonProps = { ...props, ...defaultProps }
  delete buttonProps.log // remove log prop from being passed to <Button/>
  const onClickFn = () => {
    props.addAction('custom action created by adk-button component')
    props.onClick()
    if (props.log) {
      props.log()
    }
  }
  return (
    <Button {...buttonProps} onClick={onClickFn}>
      {props.children}
    </Button>
  )
}
