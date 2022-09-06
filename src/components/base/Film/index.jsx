// Film Component
// TODO - Make Dialogue for full screen image pop-up. Provide CSS to wrap images at 4 x n 

import React from 'react'
import { Pane } from 'evergreen-ui'

export const Film = ({fields}) => {
  const photos = fields.photos

  return (
    <Pane
      display='flex'
      flex-flow='wrap'
      id='film'
    >
      { 
        photos.map((photo, index) => {
          const { fields: { title, description, file: { url } } } = photo;
            
          return (
              <img
                src={`https:${url}`}
                alt={description}
                id={`f${index}`}
              />
            )
        }) 
      }
    </Pane>
  )
}