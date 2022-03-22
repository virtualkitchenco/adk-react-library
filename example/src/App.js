import React from 'react'

import { POCPackage1 } from 'adk-react-library/poc-package-1'
import { POCPackage2 } from 'adk-react-library/poc-package-2'
import 'adk-react-library/poc-package-1/dist/index.css'
import 'adk-react-library/poc-package-2/dist/index.css'

const App = () => {
  return (
    <div>
      <POCPackage1 text='Create React Library Example #1 😄' />
      <POCPackage2 text='Create React Library Example #2 😄' />
    </div>
  )
}

export default App
