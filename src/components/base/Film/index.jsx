// Film Component
// TODO - Make Dialogue for full screen image pop-up. Use onClick.

import React from 'react'
import { Pane } from 'evergreen-ui'

export const Film = ({fields}) => {
  const photos = fields.photos

  return (
    <Pane
      display='grid'
      gridTemplateColumns='repeat(4, 1fr)'
      gap='25px'
      id='film'
      placeSelf='center'
    >
      { 
        photos.map((photo, index) => {
          const { fields: { title, description, file: { url } } } = photo
            
          return (
              <img
                src={`https:${url}`}
                alt={description}
                key={`f${index}`}
                // onClick={}
              />
            )
        }) 
      }
    </Pane>
  )
}