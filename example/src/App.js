import React from 'react'

import { POCPackage1 } from 'adk-react-library/poc-package-1'
import { POCPackage2 } from 'adk-react-library/poc-package-2'
import { ButtonComponent as Button } from 'adk-react-library/Button'
import 'adk-react-library/poc-package-1/dist/index.css'
import 'adk-react-library/poc-package-2/dist/index.css'
import 'adk-react-library/Button/dist/index.css'

const App = () => {
  return (
    <div>
      <Button label='A Button' />
      <POCPackage1 text='Create React Library Example #1 😄' />
      <POCPackage2 text='Create React Library Example #2 😄' />
    </div>
  )
}

export default App
