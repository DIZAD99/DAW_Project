import React from 'react'
import './homeHeader.css'
import Navbar from '../../components/navbar/Navbar'
import landingPage from '../../assets/landingPage.png'

function Homeheader() {
    return (
        <div className='section Homeheader '>
            <Navbar />
            <div className="contnet">
                <div className="left">
                    <h1>
                        WELCOME TO OUR PROGRAME
                    </h1>
                </div>
                <div className="right">
                    <img src={landingPage} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Homeheader