import React from 'react'
import { Pane } from 'evergreen-ui'
import { Link } from 'react-router-dom'

export default function Title () {
  return (
    <Pane>
      <Link to={{ pathname: '/' }}>
        <p>DENIS</p>
      </Link>
    </Pane>
  )
}