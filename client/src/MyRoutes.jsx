import React from 'react'
import { BrowserRouter as Routing, Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home'
import Contact from './pages/contact/Contact'
import Error from './pages/error/Error'
import Service from './pages/service/Service'
import Signup from './pages/signup/Signup'
import Team from './pages/team/Team'
import About from './pages/about/About'
import Testimonial from './pages/testimonial/Testimonial'
import Login from './pages/login/Login'




function MyRoutes() {
  return (
    <>
      <Routing>
        <Routes>
          <Route path='/' Component={Home} />
          <Route path='/about' Component={About} />
          <Route path='/contact' Component={Contact} />
          <Route path='/error' Component={Error} />
          <Route path='/service' Component={Service} />
          <Route path='/signup' Component={Signup} />
          <Route path='/team' Component={Team} />
          <Route path='/login' Component={Login} />
          <Route path='/testimonial' Component={Testimonial} />

        </Routes>
      </Routing>
    </>
  )
}

export default MyRoutes