// Film Component
// TODO - Make Dialogue for full screen image pop-up. Use onClick.

import React, { useState, useCallback } from 'react'
import ImageViewer from 'react-simple-image-viewer';
import { Pane } from 'evergreen-ui'

export const Film = ({fields}) => {
  const photos = fields.photos
  const photoArr = photos.map((photo, index) => {
    return `https://${photo.fields.file.url}`
  })

  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <Pane
      display='grid'
      gap='1%'
      gridTemplateColumns='repeat(4, 1fr)'
      id='film'
      margin='auto'
      placeSelf='center'
      alignContent='center'
      width='80vw'
      paddingTop='2%'
    >
      {photos.map((photo, index) => (
        <img
          src={`http://${photo.fields.file.url}`}
          onClick={ () => openImageViewer(index) }
          width="100%"
          key={ index }
          style={{ margin: '2%', cursor: 'pointer'}}
          alt={`${photo.fields.description}`}
        />
      ))}

      {isViewerOpen && (
        <>
        <ImageViewer
          src={ photoArr }
          currentIndex={ currentImage }
          disableScroll={ false }
          closeOnClickOutside={ true }
          onClose={ closeImageViewer }
          />
        </>
      )}
    </ Pane>
  );
}