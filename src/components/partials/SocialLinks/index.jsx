//SocialLinks Component

import React from 'react';
import { Link, Pane } from 'evergreen-ui';


export const SocialLinks = ({ info }) => {
  const { fields: { icon: { fields: { file: { url } } }, link, name } } = info
  return (
    <Link href={link} target='_blank' rel='noopener noreferrer'>
      <Pane is='img' src={`https:${url}`} alt={name} />
    </Link>
  )
}