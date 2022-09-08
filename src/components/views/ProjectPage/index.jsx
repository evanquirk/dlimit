
import React from 'react'
import { useParams } from 'react-router-dom'
import { Pane } from 'evergreen-ui'

import { Banner } from '../../base'
import { Info } from './components'

import filterContent from './lib/filterContent'


export const ProjectPage = ({ work }) => {
  const { slug, type } = useParams()

  const project = work[type].find(obj => {
    return obj.slug === slug
  })

  const { name, header, banner, roles, content} = project

  return (
    <Pane
      display='flex'
      flexDirection='column'
      justifyContent='center'
      alignItems='center'
    >
      {banner &&
        <Banner 
          banner={banner} 
        />
      }
      {roles &&
        <Info
          title={name}
          roles={roles}
          description={header}
        />
      }
      {
        content.map(({ sys, fields }, index) => {
          return filterContent({sys, fields, index})
      }
        )}
    </Pane>

  )
}