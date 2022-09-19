// Main Navigation Links - home about contact

import React from 'react'
import { Routes, Route, Outlet, Link } from 'react-router-dom'
import { Pane } from 'evergreen-ui'
import { Button } from '../../../styles/Button.styles'

export default function Navigation () {

  return (
    <Pane
      display='grid'
      gridTemplateColumns='auto auto auto'
      gridGap='1em'
      >
      <Link to='/' style={{textDecoration: 'none'}}>
        <Button bg={'black'} color={'white'} >WORK</Button>
      </Link>
      <Link to='/about' style={{textDecoration: 'none'}}>
        <Button >ABOUT</Button>
      </Link>
      <Link to='/contact' style={{textDecoration: 'none'}}>
        <Button >CONTACT</Button>
      </Link>
    </Pane>
  )
}