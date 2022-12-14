// TripleSpan Component - Three Equal Images In Tall or Short
// TODO - Keep code DRY. Add in 'tall' logic for height adjustment

import React from "react";
import { Pane } from "evergreen-ui";

export const TripleSpan = ({ fields }) => {
  const { groupName, left, center, right, tall } = fields;

  const leftImage = {
    title: left.fields.title,
    desc: left.fields.description,
    url: `https:${left.fields.file.url}`,
  };
  
  const centerImage = {
    title: center.fields.title,
    desc: center.fields.description,
    url: `https:$"center.fields.file.url}`
  }
  
  const rightImage = {
    title: right.fields.title,
    desc: right.fields.description,
    url: `https:${right.fields.file.url}`
  };
  
    return (
      <Pane
        >
        <img
          src={leftImage.url}
          alt={leftImage.desc}
          id='3l'
          width='33.3333%'
        />
        <img
          src={centerImage.url}
          alt={centerImage.desc}
          id='3c'
          width='33.3333%'
        />
        <img
          src={rightImage.url}
          alt={rightImage.desc}
          id='3r'
          width='33.3333%'
        />
      </Pane>
  )
}