import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/intro/Intro'
import About from '../components/about/About'

function ReactRouter() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/about' element={<About />}/>
    </Routes>
  )
}

export default ReactRouter
