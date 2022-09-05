import React from 'react'
import { Pane } from 'evergreen-ui'

export const SingleSpan = ({fields}) => {
  const {name, photo: { fields: { description, file } }} = fields

  return (
    <Pane>
      <img 
        src={`https:${file.url}`}
        alt={description}
        id='full'
      />
    </Pane>
  )
}