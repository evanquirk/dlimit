// Banner Component

import React from 'react'

export const Banner = ({banner}) => {

  const url = `https:${banner.fields.file.url}`
  const alt = banner.fields.description

  return (
      <img 
        src={url} 
        alt={alt}
        style={{marginTop: '2%', width: '100%', objectFit: 'contain'}}
      />
  )
}