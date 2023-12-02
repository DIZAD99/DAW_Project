import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faGear,faArrowRightFromBracket,faQuestion,faUserDoctor,faHouseUser,faCirclePlus,faBell } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import './Settings.css'
import logo from '../../../assets/logo.png'
import testimonial from '../../../assets/testimonial.jpg'
import testimonialBG from '../../../assets/testimonialBG.png'

function Settings() {
  return (
    <div className='settings'>
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
            <div className="picture">
                <img src={testimonial} alt="" />
                <div className="">
                    <h3>Mr. MEHALLI Mahfoud Bahaeddine</h3>
                    <h4>Male, 20 yo.</h4>
                </div>
            </div>
            <div className="infos">
                <div className="duo">
                    <div className="duo2">
                        <label htmlFor="">First Name:</label>
                        <input type="text" />
                    </div>
                    <div className="duo2">
                        <label htmlFor="">Family Name:</label>
                        <input type="text" />
                    </div>
                </div>
                <div className="duo">
                    <div className="duo2">
                        <label htmlFor="">Old Password:</label>
                        <input type="password" />
                    </div>
                    <div className="duo2">
                        <label htmlFor="">New Password:</label>
                        <input type="password" />
                    </div>
                </div>
                <div className="duo">
                    <div className="duo2">
                        <label htmlFor="">Email:</label>
                        <input type="text" />
                    </div>
                    <div className="duo">
                        <div className="duo">
                            <div className="duo2">
                                <label htmlFor="">Sex:</label>
                                <input type="text" />
                            </div>
                            <div className="duo2 duo3">
                                <label htmlFor="">Birthday Date:</label>
                                <input type="text" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Settings