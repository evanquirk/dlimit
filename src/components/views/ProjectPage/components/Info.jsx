//Info Component for Project Page

import React from 'react'
import { Composition } from 'atomic-layout'
import { Heading, Paragraph, Text } from 'evergreen-ui'

const area = `
  title description
  roles description
`

export const Info = ({ title, roles, description }) => {

  return (
    <Composition
      areas={area}
      templateCols='1fr 1fr'

      marginHorizontal='5%'
    >
      {({ Title, Roles, Description }) => (
        <>
        <Title>
          <Heading>{title.toUpperCase()}</Heading>
        </Title>
        <Roles>
          {roles.map(({fields}) => {
              const { preface, content } = fields
              return (
                <>
                <Text><b>{preface}</b> </Text>
                <Text>{content}</Text>
                <br/>
                </>
              )
          })
          }
        </Roles>
        <Description>
          <Paragraph>{description}</Paragraph>
        </Description>
        </>
      )}
    </Composition>
  )
}