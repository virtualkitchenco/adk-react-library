import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import cn from 'classnames'
import React from 'react'
import { button } from '../utilities/customStyles'
import s from './index.module.css'

/**
 * @function OverviewForm
 * @param {function} handleReset - handle reset button click
 * @param {function} handleSubmit - handle submit button click
 * @param {function} updateSearch - update URL search params
 * @param {handleKeyPress} - handle key press for input field
 * @param {function} handleInputChange - handle input change for input field
 * @param {function} renderCustomElements - returns JSX for custom form elements
 * @param {function} generateNameToValueMap - returns an object mapping form element name attribute values to hook values
 * @param {JSON} formConstants - consists of constants pertaining to form title, textFields and optional link
 * @return {JSX} - Overview form
 */
const OverviewForm = ({
  handleReset,
  handleSubmit,
  updateSearch,
  handleKeyPress,
  handleInputChange,
  renderCustomElements,
  generateNameToValueMap,
  formConstants: { title, textFields }
}) => {
  const nameToValueMap = generateNameToValueMap()
  const multipleInputs = textFields.length > 1
  const buttonClasses = button()

  const renderTextFields = () =>
    textFields.map((props, index) => {
      const { name, label, variant } = props

      return (
        <div className={s.marginRight} key={index}>
          <TextField
            label={label}
            variant={variant}
            name={name}
            onChange={handleInputChange}
            value={nameToValueMap[name]}
            onKeyPress={handleKeyPress}
          />
        </div>
      )
    })

  return (
    <div className={cn(s.search, { [s.spaceBetween]: multipleInputs })}>
      {renderTextFields()}
      {renderCustomElements && (
        <div className={s.marginRight}>{renderCustomElements()}</div>
      )}
      <Button
        onClick={() => handleSubmit(updateSearch)}
        className={buttonClasses.primary}
      >
        Search
      </Button>
      <Button
        onClick={handleReset}
        className={cn(buttonClasses.secondary, s.resetButton)}
      >
        Reset
      </Button>
    </div>
  )
}

export default OverviewForm
