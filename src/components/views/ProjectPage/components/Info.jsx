//Info Component for Project Page

import React from 'react'
import { Composition } from 'atomic-layout'
import { Heading, Paragraph } from 'evergreen-ui'

const area = `
  title description
  roles description
`

export const Info = ({ title, roles, description }) => {
  return (
    <Composition
      areas={area}
      templateCols='1fr 3fr'
      marginHorizontal='20'
    >
      {({ Title, Roles, Description }) => (
        <>
        <Title>
          <Heading>{title}</Heading>
        </Title>
        <Roles>
        </Roles>
        <Description>
          <Paragraph>{description}</Paragraph>
        </Description>
        </>
      )}
    </Composition>
  )
}