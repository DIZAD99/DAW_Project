import React, { Component, useEffect, useState } from 'react'
import './Login.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { MenuItem, TextField } from '@mui/material'


const Login = () => {
    const [container, setContainer] = useState(null)

    useEffect(() => {
        const signUpButton = document.getElementById('signUp')
        const signInButton = document.getElementById('signIn')
        const containerElement = document.getElementById('container')

        setContainer(containerElement)

        signUpButton.addEventListener('click', () => {
            containerElement.classList.add('right-panel-active');
        })

        signInButton.addEventListener('click', () => {
            containerElement.classList.remove('right-panel-active')
        })

        return () => {
            signUpButton.removeEventListener('click', () => {
                containerElement.classList.add('right-panel-active');
            })
            signInButton.removeEventListener('click', () => {
                containerElement.classList.remove('right-panel-active')
            })
        }
    }, [])

    return (
        <>
            <div className="section container loginANDsignup " id="container">
                <div className="form-container sign-up-container">
                    <LoginSection />
                </div>
                <div className="form-container sign-in-container">
                    <SignupSection />
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" id="signIn">LogIn</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" id="signUp" >Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}



class LoginSection extends Component {
    constructor(props) {
        super(props)

        this.handleTogglePasswordVisibility = this.handleTogglePasswordVisibility.bind(this)

        this.state = {
            showPassword: false,
            password: '',
        }
    }

    handleTogglePasswordVisibility() {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }


    render() {
        const optionStyle = {
            backgroundColor: '#f0f0f0',
            color: '#333',
            padding: '8px',
            fontSize: '14px',
        }
        return (
            <form action="#">
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><FacebookIcon /></a>
                    <a href="#" className="social"><GoogleIcon /></a>
                </div>
                <span>or use your email for registration</span>
                <div className="name">
                    <input type="text" placeholder="First Name" required />
                    <input type="text" placeholder="Last Name" required />
                </div>
                <div className="sexANDdate">
                    <select name="" id="" required>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <input type='date' />
                </div>
                <input type="email" placeholder="Email" required />
                <div className='Visibility'>
                    <input
                        type={this.state.showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        required
                        minLength={8}

                    />
                    <p>See Password  {this.state.showPassword ? <VisibilityIcon onClick={this.handleTogglePasswordVisibility} /> : <VisibilityOffIcon onClick={this.handleTogglePasswordVisibility} />}</p>

                </div>
                <button className='Btn'>Sign Up</button>
            </form>
        )
    }
}



class SignupSection extends Component {
    constructor(props) {
        super(props)

        this.handleTogglePasswordVisibility = this.handleTogglePasswordVisibility.bind(this)

        this.state = {
            showPassword: false,
            password: '',
        }
    }

    handleTogglePasswordVisibility() {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    render() {

        return (
            <form action="#">
                <h1>LogIn</h1>
                <div className="social-container">
                    <a href="#" className="social"><FacebookIcon /></a>
                    <a href="#" className="social"><GoogleIcon /></a>
                </div>
                <span>or use your account</span>
                <input type="email" placeholder="Email" required />
                <div className='Visibility'>
                    <input
                        type={this.state.showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        required
                        minLength={8}
                    />
                    <p>See Password  {this.state.showPassword ? <VisibilityIcon onClick={this.handleTogglePasswordVisibility} /> : <VisibilityOffIcon onClick={this.handleTogglePasswordVisibility} />}</p>

                </div>
                <a href="#">Forgot your password?</a>
                <button className='Btn'>LogIn</button>
            </form>
        )
    }
}



export default Login;
