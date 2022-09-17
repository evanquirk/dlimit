//SocialLinks Component

import React from 'react';
import { Link, Pane } from 'evergreen-ui';


export const SocialLinks = ({ info }) => {
  const { fields: { icon: { fields: { file: { url } } }, iconLink, link, name } } = info
  return (
    <Link href={link} target='_blank' rel='noopener noreferrer'>
      {iconLink ? 
      <Pane is='img' src={iconLink} alt={name} width={100}/> :
      <Pane is='img' src={`https:${url}`} alt={name} width={100} />
      }
    </Link>
  )
}