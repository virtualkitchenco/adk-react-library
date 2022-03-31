import React from 'react'

import { POCPackage1 } from 'adk-react-library/poc-package-1'
import { POCPackage2 } from 'adk-react-library/poc-package-2'
import { ButtonComponent as Button } from 'adk-react-library/Button'
import { TableComponent as Table } from 'adk-react-library/table'
import 'adk-react-library/poc-package-1/dist/index.css'
import 'adk-react-library/poc-package-2/dist/index.css'
import 'adk-react-library/Button/dist/index.css'

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9)
]

const columns = [
  'Dessert (100g serving)',
  'Calories',
  'Fat (g)',
  'Carbs (g)',
  'Protein (g)'
]

const App = () => {
  return (
    <div>
      <Button label='A Button' />
      <POCPackage1 text='Create React Library Example #1 😄' />
      <POCPackage2 text='Create React Library Example #2 😄' />
      <Table rows={rows} columns={columns} />
    </div>
  )
}

export default App
