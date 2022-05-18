import React from 'react'
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import Contact from './components/contact/Contact'
import Portfolio from './components/portfolio/Portfolio'
import Services from './components/services/Services'
import Blog from './components/blog/Blog'
import Footer from './components/footer/Footer'



const App = () => {
  return (
    <div>
      <Header/>
      <Navbar />
      <Contact/>
      <Portfolio/>
      <Services/>
      <Blog/>
      <Footer/>



    </div>
  )
}

export default App