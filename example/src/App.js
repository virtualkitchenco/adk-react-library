import React from 'react'

import { POCPackage1 } from 'adk-react-library/poc-package-1'
import { POCPackage2 } from 'adk-react-library/poc-package-2'
import { ButtonComponent as Button } from 'adk-react-library/Button'
import { ImageUploader } from 'adk-react-library/image-uploader'

const App = () => {
  return (
    <div>
      <Button label='A Button' />
      <POCPackage1 text='Create React Library Example #1 😄' />
      <POCPackage2 text='Create React Library Example #2 😄' />
      <ImageUploader/>
    </div>
  )
}

export default App
