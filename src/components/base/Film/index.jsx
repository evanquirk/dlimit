// Film Component
// TODO - Make Dialogue for full screen image pop-up.

import React from 'react'
import { Pane, RepeatIcon } from 'evergreen-ui'

export const Film = ({fields}) => {
  const photos = fields.photos

  return (
    <Pane
      display='grid'
      gridTemplateColumns='repeat(4, 1fr)'
      gap='10px'
      id='film'
    >
      { 
        photos.map((photo, index) => {
          const { fields: { title, description, file: { url } } } = photo
            
          return (
              <img
                src={`https:${url}`}
                alt={description}
                id={`f${index}`}
                // onClick={}
              />
            )
        }) 
      }
    </Pane>
  )
}