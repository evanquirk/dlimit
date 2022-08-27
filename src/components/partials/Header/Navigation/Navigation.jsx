import React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import { Button, Pane } from 'evergreen-ui'

export default function Navigation () {
  return (
    <Pane>
      <Link to='/'>
        <Button height={30} width={150} margin={10}>Work</Button>
      </Link>
      <Link to='/about'>
        <Button height={30} width={150} margin={10}>About</Button>
      </Link>
      <Link to='/contact'>
        <Button height={30} width={150} margin={10}>Contact</Button>
      </Link>
    </Pane>
  )
}