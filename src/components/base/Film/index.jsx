// Film Component
// TODO - Make Dialogue for full screen image pop-up. Use onClick.

import React from 'react'
import { Pane } from 'evergreen-ui'

export const Film = ({fields}) => {
  const photos = fields.photos

  return (
    <Pane
      display='grid'
      gap='1%'
      gridTemplateColumns='repeat(4, 1fr)'
      id='film'
      margin='auto'
      placeSelf='center'
      alignContent='center'
      width='80vw'
      paddingTop='2%'
    >
      { 
        photos.map((photo, index) => {
          const { fields: { title, description, file: { url } } } = photo
            
          return (
              <img
                src={`https:${url}`}
                alt={description}
                key={`f${index}`}
                style={{width:'100%'}}
                // onClick={}
              />
            )
        }) 
      }
    </Pane>
  )
}