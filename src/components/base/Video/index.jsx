// Video Component
// TODO - Add React-Player. Create Vertical or Full rendering.

import React from 'react'
import ReactPlayer from 'react-player'
import { Pane } from 'evergreen-ui'

export const Video = ({fields}) => {
const { name, url, footer } = fields
  return (
      <ReactPlayer
        url={url}
        width='100%'
        height='47vh'
        />
  )
}