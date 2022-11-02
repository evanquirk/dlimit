// Video Component

import React from 'react'
import ReactPlayer from 'react-player/lazy'

import { Pane } from 'evergreen-ui'

export const Video = ({fields}) => {
const { name, url, footer } = fields
  return (
    <Pane
        paddingTop={'2%'}
      >
      <ReactPlayer
        url={url}
        light={true}
        width={'80vw'}
        height={'45vw'}
        />
    </Pane>
  )
}