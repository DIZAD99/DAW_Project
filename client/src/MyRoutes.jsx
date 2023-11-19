import React from 'react'
import { BrowserRouter as Routing, Routes, Route } from 'react-router-dom'
import Footer from './components/footer/Footer'


function MyRoutes() {
  return (
    <>
      <Routing>
        <Routes>
          <Route path='/' Component={Footer} />
        </Routes>
      </Routing> 
    </>
  )
}

export default MyRoutes