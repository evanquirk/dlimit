// Content Component for Project Page View

import React from 'react'
import { Composition } from 'atomic-layout'
import { Text } from 'evergreen-ui';
import { Video } from '../../../base'


const areaMap = {
  singleSpan: 'content1',
  video: 'content1',
  doubleSpan: 'content1 content2',
  tripleSpan: 'content1 content2 content3',
  vertical: `
    content1 content4
    content2 content4
    content3 content4
  `
}
export const Content = ({ contentId, fields }) => {

  const contentArr = fields.content
  const { Image1, Video } = contentArr.reduce((acc, content, index) => {
    const key = `Image${index+1}`
    if (contentId === 'video') {
      acc[Video] = <Video />
      return acc
    }


  //   const info {
  //     url: content.url or whatever..,
  //     alt: content.desc or whatever..
  //   }
  //   acc[key] = <img> href={url} />
  //   return acc
  // }, {})


   //TODO - Figure out this component logic for looping through each piece of a page, and render the appropriate component. Run through logic, or do in the single file? 
   
  return (
    <>
    <Footer />
    </>
  )
  }

const Footer = (({ content }) => (
  <Text>{content}</Text>
))