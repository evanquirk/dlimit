
import React from 'react'
import { Banner, DoubleSpan, Film, TripleSpan, Vertical, Video } from '../../../base'

const filterContent = ({ id, fields, index }) => {

  switch (id) {
    // case 'banner':
    //   return <Banner key={`element-${index}`} fields={fields} />
    case 'doubleSpanImage':
      return <DoubleSpan key={`element-${index}`} fields={fields} />
    // case 'film':
    //   return <Film key={`element-${index}`} fields={fields} /> 
    // case 'singleSpan':
    //   return <SingleSpan key={`element-${index}`} fields={fields} />
    case 'tripleSpan':
      return <TripleSpan key={`element-${index}`} fields={fields} />
    case 'vertical':
      return <Vertical key={`element-${index}`} fields={fields} />
    case 'video':
      return <Video key={`element-${index}`} fields={fields} />
      
    default:
      return <div key={`element-${index}`}></div>
  }
}

export default filterContent