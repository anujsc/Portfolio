import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../components/Home'
import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

function routes() {
  return (
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/About' element={<About/>}/>
    <Route path='/Projects' element={<Projects/>}/>
    <Route path='/Contact' element={<Contact/>}/>

  </Routes>
  )
}

export default routes