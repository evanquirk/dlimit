// ProjectTypes Navigation Component

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Pane } from 'evergreen-ui'

export const ProjectTypes = ({style}) => {

  const { home, graphics, videos, objects, photos } = style

  return (
    <Pane display='flex'>
      <Pane 
        flex={1} 
        justifyContent='center' 
        display='flex' 
        marginTop='50px' 
        marginBottom='20px'
      >
        <Link to='/'>
          <Button background={home}>All Work</Button>
        </Link>
        <Link to='/graphics'>
          <Button background={graphics}>Graphics</Button>
        </Link>
        <Link to='/videos'>
          <Button background={videos}>Videos</Button>
        </Link>
        <Link to='/objects'>
          <Button background={objects}>Objects</Button>
        </Link>
        <Link to='/photos'>
          <Button background={photos}>Photos</Button>
        </Link>
      </Pane>
    </Pane>
  )
}