
import React from 'react'
import { Banner, DoubleSpan, Film, SingleSpan, TripleSpan, Vertical, Video } from '../../../base'

const filterContent = ({ sys, fields }) => {
  const id = sys.contentType.sys.id

  switch (id) {
    case 'banner':
      return <Banner fields={fields} />
    case 'doubleSpanImage':
      return <DoubleSpan fields={fields} />
    case 'film':
      return <Film fields={fields} /> 
    case 'singleSpan':
      return <SingleSpan fields={fields} />
    case 'tripleSpan':
      return <TripleSpan fields={fields} />
    case 'vertical':
      return <Vertical fields={fields} />
    case 'video':
      return <Video fields={fields} />
    default:
      return <div></div>
  }
}

export default filterContent