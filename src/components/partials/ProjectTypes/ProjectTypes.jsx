// ProjectTypes Navigation Component
//TODO - Create 600px Break Point (or averages) to create hamburger

import React from "react";
import { Link } from "react-router-dom";
import { Pane } from "evergreen-ui";
import { ProjectButton } from "../../styles/Button.styles";

export const ProjectTypes = ({ style }) => {
  const { home, graphics, videos, objects, photos } = style;

  return (
    <Pane display='flex'>
      <Pane 
        flex={1} 
        justifyContent='center' 
        display='grid'
        gridTemplateColumns='auto auto auto auto auto'
        gridGap='5%'
        marginTop='6%' 
        marginBottom='2%'
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <ProjectButton background-color={home}>WORK</ProjectButton>
        </Link>
        <Link to="/graphics" style={{ textDecoration: "none" }}>
          <ProjectButton background-color={graphics}>GRAPHICS</ProjectButton>
        </Link>
        <Link to="/videos" style={{ textDecoration: "none" }}>
          <ProjectButton background-color={videos}>VIDEOS</ProjectButton>
        </Link>
        <Link to="/objects" style={{ textDecoration: "none" }}>
          <ProjectButton background-color={objects}>OBJECTS</ProjectButton>
        </Link>
        <Link to="/photos" style={{ textDecoration: "none" }}>
          <ProjectButton background-color={photos}>PHOTOS</ProjectButton>
        </Link>
      </Pane>
    </Pane>
  );
};
