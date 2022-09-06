// Video Component
// TODO - Add React-Player. Create Vertical or Full rendering.

import React from 'react'
import ReactPlayer from 'react-player'

export const Video = (fields) => {

  return (
    <ReactPlayer
      url='https://youtu.be/7sDY4m8KNLc'
      width='75.8%'
      height='900px'
    />
  )
}