// App.js
// TODO - Complete Responsive Design Top Level. Remove unnecessary hooks or state

import React, { Suspense, useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Normalize from 'react-normalize'
import { useMediaQuery } from 'react-responsive'

import { ThemeProvider } from 'styled-components'

import { GlobalStyles } from './components/styles/Global.styles'

import { Loader } from './components/base'
import { Footer, Header, ProjectTypes } from './components/partials'
import { About, Contact, NotFound, ProjectPage, Work } from './components/views'
import useContentful from './hooks/useContentful'

const theme = {
  light: {
    primary: 'white',
    text: 'black',
    about: '',
    graphics: '',
    objects: '',
    photos: '',
    videos: ''
  }
}

const App = () => {
  const { getWork, getStyle } = useContentful()
  const [work, setWork] = useState(null)
  const [style, setStyle] = useState(null)
  const [width, setWindowWidth] = useState(0)
  
  
  useEffect(async () => {
    const res = await getStyle()
    const style = res
    return style, 
    setStyle(style)
  })
  
  useEffect(() => {
    updateDimensions();

    window.addEventListener("resize", updateDimensions)
    
    return () => window.removeEventListener("resize", updateDimensions)
  }, [])
  
  const updateDimensions = () => {
    const width = window.innerWidth
    setWindowWidth(width)
    console.log(width)
  }
  
  
  useEffect(async () => {
    const res = await getWork()
    const work = res.reduce((acc, project) => {
      const { type } = project

      acc.all.push(project)
      acc[type].push(project)
      return acc
    }, { all: [], videos: [], photos: [], objects: [], graphics: [] })
    
    setWork(work)
  }, [])

  useEffect(() => {
    console.log(work)
  }, [work])

  
  if (work) {
    return (
      <ThemeProvider theme={theme}>
        <Normalize />
        <Header style={style}/>
        <ProjectTypes style={style}/>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path='*' element={<NotFound />} />
            <Route path='/' element={<Work work={work} />} />
            <Route path='about' element={<About />} />
            <Route path='contact' element={<Contact />} />
            <Route path='home' element={<Work work={work} />} />
            <Route path='/:type' element={<Work work={work} />} />
            <Route path='/:type/:slug' element={<ProjectPage work={work} />} />
          </Routes>
        </Suspense>
        <Footer />
      </ThemeProvider>
  )
} else {
  return <Loader />
}
}

export default App
