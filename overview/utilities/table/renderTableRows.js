import TableCell from '@mui/material/TableCell'
import TableRow from '@mui/material/TableRow'
import cn from 'classnames'
import React from 'react'

/**
 * @function renderTableRows
 * @param {Array<JSON>} results - collection of data objects
 * @param {JSON} classes - collection of css classes
 * @param {function} renderContent - arguments: data object, css classes; returns an array of values for one table row
 * @param {boolean} rightAlignFinalColumn - option to right align final value in each table row
 * @return {JSX} - table rows
 */
const renderTableRows = ({
  results,
  classes = {},
  renderContent,
  rightAlignFinalColumn
}) => {
  return results.map((result, id) => {
    const content = renderContent(result, classes)

    return (
      <TableRow key={id}>
        {content.map((data, index) => {
          const firstColumn = index === 0
          const finalColumn = index === content.length - 1
          const alignment =
            finalColumn && rightAlignFinalColumn ? 'right' : 'left'

          return (
            <TableCell
              key={index}
              className={cn(
                classes.cell,
                { [classes.firstCol]: firstColumn },
                { [classes.lastCol]: finalColumn }
              )}
              align={alignment}
            >
              {data}
            </TableCell>
          )
        })}
      </TableRow>
    )
  })
}

export default renderTableRows
