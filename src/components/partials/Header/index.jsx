
import React from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router'
import Title from './Title/Title'
import Navigation from './Navigation/Navigation'
import { Pane } from 'evergreen-ui'

export const Header = ({style}) => {

  return (
    <Pane height={100} background='blue500' display='flex' alignItems='center' borderBottom='1px solid black'>
      <Pane flex={1} alignItems='center' display='flex' marginLeft={100} marginRight={90}>
        <Pane flex={1} alignItems='center' display='flex'>
          <Title />
        </Pane>
        <Pane>
          <Navigation />
        </Pane>
      </Pane>
    </Pane>

  )
}