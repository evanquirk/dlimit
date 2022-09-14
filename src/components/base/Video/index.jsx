// Video Component
// TODO - Add React-Player. Create Vertical or Full rendering.

import React from 'react'
import ReactPlayer from 'react-player'

export const Video = ({fields}) => {
const { name, url, footer } = fields
  return (
      <ReactPlayer
        url={url}
        width='75.8%'
        height='900px'
      />
  )
}