// Work Page View

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { TitleCard } from "../../base";
import { ProjectTypes } from "../../partials/ProjectTypes/ProjectTypes";
import { Pane } from "evergreen-ui";

export const Work = ({ work, style }) => {
  const { type = "all" } = useParams();

  let column;
  work[type].length > 1
    ? (column = "repeat(2, 1fr)")
    : (column = "repeat(1, 1fr)");

  return (
    <Pane
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      margin="auto"
    >
      <ProjectTypes style={style} />
      <Pane
        display="grid"
        gridTemplateColumns={column}
        gap="25px"
        placeSelf="center"
      >
        {work[type].map((project, index) => {
          const { type, slug, card } = project;
          if (!type) {
            return <></>;
          }
          return (
            <TitleCard
              key={index}
              type={type}
              slug={slug}
              fields={card.fields}
            />
          );
        })}
      </Pane>
    </Pane>
  );
};
