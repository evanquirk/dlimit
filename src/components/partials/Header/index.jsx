
import React from 'react'
import { withRouter } from 'react-router'
import Title from './Title/Title'
import Navigation from './Navigation/Navigation'
import { Pane } from 'evergreen-ui'

export const Header = ({style}) => {

  return (
    <Pane>
      <Pane height={100} background='black' display='flex' alignItems='center' borderBottom='1px solid black'>
        <Pane flex={1} alignItems='center' display='flex' marginLeft={120} marginRight={140}>
          <Pane flex={1} alignItems='center' display='flex'>
            <Title />
          </Pane>
          <Pane>
            <Navigation />
          </Pane>
        </Pane>
      </Pane>
    </Pane>

  )
}