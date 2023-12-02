import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear,faArrowRightFromBracket,faQuestion,faUserDoctor,faHouseUser,faCirclePlus,faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './Profile.css'
import logo from '../../assets/logo.png'
import testimonial from '../../assets/testimonail.png'
import testimonialBG from '../../assets/testimonailBG.png'

function Profile() {
  return (
    <div className='profile'>
        <div className="sidebar">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="options">
                <div className="option">
                    <FontAwesomeIcon className='icon' icon={faHouseUser} />
                    <h2>Home</h2>
                </div>
                <div className="option">
                    <FontAwesomeIcon className='icon' icon={faUserDoctor} />
                    <h2>Doctors</h2>
                </div>
                <div className="option">
                    <FontAwesomeIcon className='icon' icon={faQuestion} />
                    <h2>Take Test</h2>
                </div>
                <div className="option">
                    <FontAwesomeIcon className='icon' icon={faGear} />
                    <h2>Settings</h2>
                </div>
                <div className="option">
                    <FontAwesomeIcon className='icon' icon={faArrowRightFromBracket} />
                    <h2>Log Out</h2>
                </div>
            </div>
        </div>

        <div className="content">
            <div className="hiandnotif">
                <h3>Hi Mr. Mahfoud,</h3>
                <FontAwesomeIcon className='icon' icon={faBell} />
            </div>
            <div className="first">
                <div className="pfp">
                    <img src={testimonial} alt="img" />
                    <h1>MEHALLI Mahfoud Bahaeddine</h1>
                    <button className='Btn'>Edit Profile</button>
                </div>

                <div className="nexttopfp">
                    <div className="txt">
                        <h2>Healthy doesn't have to be hard</h2>
                        <button className='Btn'>Register Now</button>
                    </div>
                    <div className="idk"></div>
                </div>
            </div>
            <h3>Read more articles</h3>
            <div className="articles">
                <div className="article">
                    <img src={testimonialBG} alt="" />
                    <div className="articleinfo">
                        <h1>Lorem ipsum dolor sit amet.</h1>
                        <p>by bahaeddine</p>
                        <a href="#"><FontAwesomeIcon className='icon' icon={faCirclePlus} />Read full article</a>
                    </div>
                </div>
                <div className="article">
                    <img src={testimonialBG} alt="" />
                    <div className="articleinfo">
                        <h1 className="aricletitle">Lorem ipsum dolor sit amet.</h1>
                        <p className="articleauther">by bahaeddine</p>
                        <a href="#"><FontAwesomeIcon className='icon' icon={faCirclePlus} />Read full article</a>
                    </div>
                </div>
                <div className="article">
                    <img src={testimonialBG} alt="" />
                    <div className="articleinfo">
                        <h1 className="aricletitle">Lorem ipsum dolor sit amet.</h1>
                        <p className="articleauther">by bahaeddine</p>
                        <a href="#"><FontAwesomeIcon className='icon' icon={faCirclePlus} />Read full article</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Profile