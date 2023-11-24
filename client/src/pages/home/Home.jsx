import React from 'react'
import './Home.css'
import Footer from '../../components/footer/Footer'
import Homeheader from './homeHeader'
import Defi from './Defi'
import { AbooutSection } from '../about/About'
import { ContactSection } from '../contact/Contact'
import { ServiceSection } from '../service/Service'
import { TeamSection } from '../team/Team'
import { TestimonailSection } from '../testimonial/Testimonial'


function Home() {
    return (
        <>
            <Homeheader />
            <Defi />
            <AbooutSection />
            <ServiceSection />
            <TeamSection /> 
            <TestimonailSection />
            <ContactSection />
            <Footer></Footer>
        </>
    )
}

export default Home