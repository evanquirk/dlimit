// TitleCard Component

import React from "react";
import { Link } from "react-router-dom";
import { Pane } from "evergreen-ui";

export function TitleCard({ type, slug, fields }) {
  const { title, file } = fields;
  const img = fields ? file.url : undefined;

  return (
    <Link to={{ pathname: `/${type}/${slug}` }}>

      <Pane margin={'2%'}>
        {fields && (
          <img 
            src={img} 
            alt={title}
            width='100%'
            
          />
        )}
      </Pane>

    </Link>
  );
}
