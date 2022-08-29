// ProjectTypes Navigation Component

import React from 'react'
import { Link } from 'react-router-dom'
import { Button, Pane } from 'evergreen-ui'

export const ProjectTypes = () => {
  return (
    <Pane display='flex'>
      <Pane flex={1} justifyContent='center' display='flex'>
        <Link to='/'>
          <Button>All Work</Button>
        </Link>
        <Link to='/graphics'>
          <Button>Graphics</Button>
        </Link>
        <Link to='/videos'>
          <Button>Videos</Button>
        </Link>
        <Link to='/objects'>
          <Button>Objects</Button>
        </Link>
        <Link to='/photos'>
          <Button>Photos</Button>
        </Link>
      </Pane>
    </Pane>
  )
}