import React from 'react'
import { Pane, Text } from 'evergreen-ui'

export const Banner = ({banner}) => {

  const url = `https:${banner.fields.file.url}`
  const alt = banner.fields.description

  return (
    <Pane>
    <img src={url} alt={alt}></img>
  </Pane>
  
  )
}