import React from 'react'

import { POCPackage1 } from 'adk-react-library/poc-package-1'
import { POCPackage2 } from 'adk-react-library/poc-package-2'
import { ImageUploader } from 'adk-react-library/image-uploader'
import { ButtonComponent as Button, buttonSx } from 'adk-react-library/Button'
import { Table } from 'adk-react-library/table'
import 'adk-react-library/poc-package-1/dist/index.css'
import 'adk-react-library/poc-package-2/dist/index.css'


const rows = [
  ['Frozen yoghurt', 159, 6.0, 24, 4.0],
  ['Ice cream sandwich', 237, 9.0, 37, 4.3],
  ['Eclair', 262, 16.0, 24, 6.0],
  ['Cupcake', 305, 3.7, 67, 4.3],
  ['Gingerbread', 356, 16.0, 49, 3.9]
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
      <Button
        className={buttonSx.blue}
        log={() => console.log('To Do: DDog logging fn')}
        onClick={() => alert('Blue Button was clicked')}
      >
        Blue Button
      </Button>
      <Button
        sx={buttonSx.gray}
        log={() => console.log('To Do: DDog logging fn')}
        onClick={() => alert('Gray Button was clicked')}
      >
        Gray
      </Button>

      <POCPackage1 text='Create React Library Example #1 😄' />
      <POCPackage2 text='Create React Library Example #2 😄' />
      <ImageUploader/>
      <Table rows={rows} columns={columns} />
    </div>
  )
}

export default App
