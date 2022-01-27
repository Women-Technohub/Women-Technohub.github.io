import React from 'react'



import About from '../../components/about/About'
import Content from '../../components/content/Content'
import Footer from '../../components/footer/Footer'
import Hero from '../../components/Hero/Hero'
import Mentorship from '../../components/mentorship/Mentorship'
import Navbar from '../../components/navbar/Navbar'





const HomePage = () => {
    return (
        
        <div>
          
        
          
          <Navbar />
            <Hero />
            <About />
            <Content />
            <Mentorship/>
            <Footer />
        </div>
       
    )
}

export default HomePage
