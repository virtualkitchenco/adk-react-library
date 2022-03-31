import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material/styles'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import IconButton from '@mui/material/IconButton'
import PhotoCamera from '@mui/icons-material/PhotoCamera'
import Stack from '@mui/material/Stack'

const Input = styled('input')({
  display: 'none'
})

export const ImageUploader = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [imageUrl, setImageUrl] = useState(null)

  useEffect(() => {
    if (selectedImage) {
      setImageUrl(URL.createObjectURL(selectedImage))
    }
  }, [selectedImage])

  return (
    <div>
      <Stack alignItems='center' spacing={2}>
        <label htmlFor='contained-button-file'>
          <Input
            accept='image/*'
            id='contained-button-file'
            multiple
            type='file'
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <Button variant='contained' component='span'>
            Upload Image
          </Button>
        </label>
        <label htmlFor='icon-button-file'>
          <Input
            accept='image/*'
            id='icon-button-file'
            type='file'
            onChange={(e) => setSelectedImage(e.target.files[0])}
          />
          <IconButton
            color='primary'
            aria-label='upload picture'
            component='span'
          >
            <PhotoCamera />
          </IconButton>
        </label>
      </Stack>
      {imageUrl && selectedImage && (
        <Box mt={2} textAlign='center'>
          <div>Image Preview:</div>
          <img src={imageUrl} alt={selectedImage.name} height='100px' />
        </Box>
      )}
    </div>
  )
}
