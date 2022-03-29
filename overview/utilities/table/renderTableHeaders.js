import TableCell from '@mui/material/TableCell'
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'
import cn from 'classnames'
import React from 'react'
import s from './index.module.css'

/**
 * @function renderTableHeaders
 * @param {Array<JSON>} headers - The array of headers to be renderd (location: /src/lib/tableHeaders.js)
 * @param {function} handleSortClick - Callback for handleing sort click.
 * @param {boolean} showSecondColumn - Used by activity tables to show/hide second column (user info). Default true.
 * @param {string} sort - Column that is selected to sort.
 * @param {string} order - Sort order: asc/desc.
 * @param {JSON} classes - Material UI classes object.
 * @param {boolean} interactive - Render first column or not.
 * @return Array<JSX> - Array of TableCell component. Default false.
 */
const renderTableHeaders = (
  currentHeaders = [],
  handleSortClick = () => {},
  showSecondColumn = true,
  sort = '',
  order = '',
  classes = {},
  interactive = true
) => {
  const headers = [...currentHeaders]
  const Arrow = order === 'asc' ? ArrowUpwardIcon : ArrowDownwardIcon
  !showSecondColumn && headers.splice(1, 1)
  !interactive && headers.splice(0, 1)

  return headers.map((head, key) => {
    const { name, id, align } = head
    const disabled = !id

    return (
      <TableCell
        key={key}
        className={cn(classes.headerCell, {
          [classes.firstCol]: key === 0,
          [classes.lastCol]: key === headers.length - 1,
          [classes.disabled]: disabled
        })}
        id={id}
        onClick={(event) => {
          event.preventDefault()
          !disabled && handleSortClick(id)
        }}
        align={align}
      >
        {name}&nbsp;
        {sort === id && <Arrow className={s.sortIcon} />}
      </TableCell>
    )
  })
}

export default renderTableHeaders
