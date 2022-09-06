// Content Component for Project Page View

import React from 'react'
import { Composition } from 'atomic-layout'
import { Text } from 'evergreen-ui';
import { Vertical, Video } from '../../../base'


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
  console.log('ContentId', contentId, 'Fields:', fields);
  console.log('ARR', contentArr);
  const { Image1, Vertical, Video } = contentArr.reduce((acc, content, index ) => {
    const key = `Image${index+1}`
    const info = {
      url: `https:${fields.file.url}`,
      desc: fields.description,
    }
    if (contentId === 'video') {
      acc[Video] = <Video {...fields}/>
      return acc
    } else if (contentId === 'vertical' && key === 'Image4') {
      acc[Vertical] = <Vertical />
  } else {
    acc[key] = <img href={info.url}></img>
    return acc
  }
  },
  {}
  
  )

/*
  const contentArr = fields.content
  const { Image1, Video } = contentArr.reduce((acc, content, index) => {
    const key = `Image${index+1}`
    if (contentId === 'video') {
      acc[Video] = <Video />
      return acc
    }


    const info {
      url: content.url or whatever..,
      alt: content.desc or whatever..
    }
    acc[key] = <img> href={url} />
    return acc
  }, {})


   TODO - Figure out this component logic for looping through each piece of a page, and render the appropriate component. Run through logic, or do in the single file? 
   
  return (
    <>
    <Footer />
    </>
  )
  }

const Footer = (({ content }) => (
  <Text>{content}</Text>
))
*/
}