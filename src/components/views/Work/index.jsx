// Work Page View

import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { TitleCard } from '../../base'
import { Pane } from 'evergreen-ui'

export const Work = ({ work }) => {
  const { type = 'all' } = useParams()

  console.log('type',work[type])
  let column
  work[type].length > 1 ? column='repeat(2, 1fr)' : column='repeat(1, 1fr)'

  return (
    <Pane
      width='100%'
      display='flex'
      alignContent='center'
      justifyContent='center'
      padding='auto'

    >
    <Pane
      display='grid'
      gridTemplateColumns={column}
      gap='25px'
      placeSelf='center'
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
    </Pane>

  )
}