// Vertical Component - Three Images and One Vertical Video
// TODO - find a good loop method top down for image info to keep code DRY

import React from "react";
import { Pane } from "evergreen-ui";
import { Video } from "../../base";

export const Vertical = (fields) => {
  const { top, middle, bottom, vertical } = fields;

  const topImage = {
    title: top.fields.title,
    desc: top.fields.description,
    url: `https:${top.fields.file.url}`,
  };
  const middleImage = {
    title: middle.fields.title,
    desc: middle.fields.description,
    url: `https:${middle.fields.file.url}`,
  };

  const bottomImage = {
    title: bottom.fields.title,
    desc: bottom.fields.description,
    url: `https:${bottom.fields.file.url}`,
  };

  return (
    <Pane>
      <Pane>
        <img src={topImage.url} alt={topImage.desc} id="tv" />
        <img src={middleImage.url} alt={middleImage.desc} id="mv" />
        <img src={bottomImage.url} alt={bottomImage.desc} id="bv" />
      </Pane>
      <Pane>
        <Video fields={vertical} />
      </Pane>
    </Pane>
  );
};
