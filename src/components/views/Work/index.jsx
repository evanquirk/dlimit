// Work Page View

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TitleCard } from '../../base'
import { Pane } from 'evergreen-ui'

export const Work = ({ work }) => {
  const { type = 'all' } = useParams()

  return (
    <Pane
    display='flex'
    flexWrap='wrap'
    flexDirection='row'
    justifyContent='center'
    alignContent='center'
    >
      {work[type].map((project, index) => {
        const { type, slug, card } = project
        if (!type) {
          return <></>
        }
        return (
        <TitleCard
          key={index}
          type={type}
          slug={slug}
          fields={card.fields}
        />
      )})}
    </Pane>

  )
}