
import React from 'react'
import { useParams } from 'react-router-dom'
import filterContent from './lib/filterContent'
import { Pane, Text } from 'evergreen-ui'
import { Banner, DoubleSpan, Film, Loader, SingleSpan, TitleCard, TripleSpan, Vertical, Video } from '../../base'
import { Content, Info } from './components'


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
      <Banner 
        banner={banner} 
      />
      <Info
        title={name}
        roles={roles}
        description={header}
      />
      {
        content.map(({ sys, fields }, index) => {
          const { contentType: { sys: { id: contentId } } } = sys
          return <Content key={`content-${index}`} contentId={contentId} fields={fields} />
        })
      }
    </Pane>

  )
}