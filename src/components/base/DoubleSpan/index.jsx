// doubleSpanImage component
// TODO - Refactor to make DRY (top down?)

import React from 'react'
import { Pane } from 'evergreen-ui'

export const DoubleSpan = ({fields}) => {
  const { groupName, left, right } = fields
  
  const leftImage = {
    title: left.fields.title,
    desc: left.fields.description,
    url: `https:${left.fields.file.url}`
  }
  const rightImage = {
    title: right.fields.title,
    desc: right.fields.description,
    url: `https:${right.fields.file.url}`
  }

  return (
    <Pane>
      <img
        src={leftImage.url}
        alt={leftImage.desc}
        id='2l'
      />
      <img
        src={rightImage.url}
        alt={rightImage.desc}
        id='2r'
      />
    </Pane>
  )
}