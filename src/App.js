import React, { Suspense, useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import Normalize from 'react-normalize'
import { Dialog, Button } from 'evergreen-ui'

import { Loader } from './components/base'
import { Footer, Header, ProjectTypes } from './components/partials'
import { About, Contact, NotFound, ProjectPage, Work } from './components/views'
import useContentful from './hooks/useContentful'

const App = () => {
  const { getWork } = useContentful()
  const [work, setWork] = useState(null)

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
  }, [work])



if (work) {
  return (
    <>
      <Normalize />
      <Header />
      <ProjectTypes />
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
    </>
  )
} else {
  return <Loader />
}
}

export default App
