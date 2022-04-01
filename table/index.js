import * as React from 'react'
import MaterialTable from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'

export const Table = ({ columns = [], rows = [] }) => {
  return (
    <TableContainer component={Paper}>
      <MaterialTable sx={{ minWidth: 650 }} aria-label='adk-table'>
        <TableHead>
          <TableRow>
            {columns.map((column, index) => (
              <TableCell key={index} align={index === 0 ? 'left' : 'right'}>
                {column}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, rowIndex) => (
            <TableRow
              key={rowIndex}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              {row.map((value, valIndex) => (
                <TableCell
                  key={valIndex}
                  component={valIndex === 0 ? 'th' : ''}
                  scope={valIndex === 0 ? 'row' : ''}
                  align={valIndex === 0 ? '' : 'right'}
                >
                  {value}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </MaterialTable>
    </TableContainer>
  )
}
