import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import React from 'react'
// import { styleTable } from '../utilities/customStyles'
import renderTableHeaders from '../utilities/table/renderTableHeaders'
import renderTableRows from '../utilities/table/renderTableRows'
import Pagination from '../pagination'

/**
 * @function OverviewTable
 * @param {number} page - current page number
 * @param {string} sort - indicates column by which to sort results
 * @param {string} order - indicates sort-order: "ASC" for ascending or "DESC" for descending
 * @param {number} count - total number of results
 * @param {Array<JSON>} results - collection of data objects
 * @param {boolean} noPagination - indicates to not include pagination
 * @param {Array<JSON>} tableHeaders - collection of static values used to render table headers
 * @param {function} handleSortClick - handle table header click; update current sort
 * @param {function} handlePageChange - handle pagination component click; update current page
 * @param {boolean} staticHeight - option to set static height for table
 * @param {function} renderTableRowContent - arguments: data object, css classes; returns an array of values for one table row
 * @param {boolean} rightAlignFinalColumn - option to right align final value in each table row
 * @return {JSX} - Overview table
 */
const OverviewTable = ({
  page,
  sort,
  order = 'ASC',
  count,
  results,
  noPagination,
  tableHeaders,
  handleSortClick,
  handlePageChange,
  staticHeight = false,
  renderTableRowContent,
  rightAlignFinalColumn
}) => {
  // const classes = styleTable()

  return (
    <>
      <TableContainer
      // className={staticHeight ? classes.container : ''}
      >
        <Table aria-label='simple table'>
          <TableHead>
            {!!count &&
              renderTableHeaders(
                tableHeaders,
                handleSortClick,
                true,
                sort,
                order.toLowerCase()
                // classes
              )}
          </TableHead>
          <TableBody>
            {renderTableRows({
              results,
              renderContent: renderTableRowContent,
              rightAlignFinalColumn
              // classes
            })}
          </TableBody>
        </Table>
      </TableContainer>
      {count > 10 && !noPagination && (
        <Pagination
          page={page}
          totalResults={count}
          onChange={handlePageChange}
        />
      )}
    </>
  )
}

export default OverviewTable
