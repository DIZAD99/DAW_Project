import React, { Component, useEffect, useState } from 'react'
import './Login.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import axios from 'axios'



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
                    <SignupSection />
                </div>
                <div className="form-container sign-in-container">
                    <LoginSection />
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



class SignupSection extends Component {
    constructor(props) {
        super(props)

        this.OnChangeFirstName = this.OnChangeFirstName.bind(this)
        this.OnChangeLastName = this.OnChangeLastName.bind(this)
        this.OnChangeEmail = this.OnChangeEmail.bind(this)
        this.OnChangeGender = this.OnChangeGender.bind(this)
        this.OnChangeBirthday = this.OnChangeBirthday.bind(this)
        this.OnChangePassword = this.OnChangePassword.bind(this)
        this.OnChangeRole = this.OnChangeRole.bind(this)
        this.SignupFunc = this.SignupFunc.bind(this)

        this.handleTogglePasswordVisibility = this.handleTogglePasswordVisibility.bind(this)

        this.state = {
            showPassword: false,
            password: '',
            firstName: '',
            lastName: '',
            gender: '',
            birthday: '',
            role: '',
            email: '',
            passwordVal: ''

        }
    }

    handleTogglePasswordVisibility() {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }

    OnChangeFirstName(e) {
        this.setState({
            firstName: e.target.value
        })
    }
    OnChangeLastName(e) {
        this.setState({
            lastName: e.target.value
        })
    }
    OnChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }
    OnChangeGender(e) {
        this.setState({
            gender: e.target.value
        })
    }
    OnChangeBirthday(e) {
        this.setState({
            birthday: e.target.value
        })
    }
    OnChangePassword(e) {
        this.setState({
            passwordVal: e.target.value
        })
    }
    OnChangeRole(e) {
        this.setState({
            role: e.target.value
        })
    }

    SignupFunc(e) {
        e.preventDefault()

        const userInfo = {
            nom: this.state.firstName,
            prenom: this.state.lastName,
            genre: this.state.gender,
            date_de_Naissance: this.state.birthday,
            role: this.state.role,
            email: this.state.email,
            mot_de_Passe: this.state.passwordVal
        }

        axios.post('http://localhost:5000/signup', userInfo)
            .then(res => console.log(res.data))
            .catch(err => console.log('Error' + err))
    }


    render() {
        return (
            <form onSubmit={this.SignupFunc}>
                <h1>Create Account</h1>
                <div className="social-container">
                    <a href="#" className="social"><FacebookIcon /></a>
                    <a href="#" className="social"><GoogleIcon /></a>
                </div>
                <span>or use your email for registration</span>
                <div className="name">
                    <input type="text" placeholder="First Name" required
                        value={this.state.firstName}
                        onChange={this.OnChangeFirstName}
                    />
                    <input type="text" placeholder="Last Name" required
                        value={this.state.lastName}
                        onChange={this.OnChangeLastName}
                    />
                </div>
                <div className="sexANDdate">
                    <select required
                        value={this.state.gender}
                        onChange={this.OnChangeGender}
                    >
                        <option value="Male" hidden>Your Gender ?</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                    </select>

                    <input type='date' required
                        value={this.state.birthday}
                        onChange={this.OnChangeBirthday}
                    />
                </div>
                <div className="sexANDdate">
                    <select required
                        value={this.state.role}
                        onChange={this.OnChangeRole}
                    >
                        <option value="" hidden>Who you are ?</option>
                        <option value="Patinet">Patinet</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                </div>
                <input type="email" placeholder="Email" required
                    value={this.state.email}
                    onChange={this.OnChangeEmail}
                />
                <div className='Visibility'>

                    <input
                        type={this.state.showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        required
                        minLength={8}
                        value={this.state.passwordVal}
                        onChange={this.OnChangePassword}
                    />
                    <p>See Password  {this.state.showPassword ? <VisibilityIcon onClick={this.handleTogglePasswordVisibility} /> : <VisibilityOffIcon onClick={this.handleTogglePasswordVisibility} />}</p>

                </div>
                <button className='Btn'>Sign Up</button>
            </form>
        )
    }
}



class LoginSection extends Component {
    constructor(props) {
        super(props)

        this.handleTogglePasswordVisibility = this.handleTogglePasswordVisibility.bind(this)
        this.LoginFunc = this.LoginFunc.bind(this)
        this.OnChangeEmail = this.OnChangeEmail.bind(this)
        this.OnChangePassword = this.OnChangePassword.bind(this)

        this.state = {
            showPassword: false,
            password: '',
            emailVal: '',
            passwordVal: ''
        }
    }

    handleTogglePasswordVisibility() {
        this.setState({
            showPassword: !this.state.showPassword
        })
    }


    OnChangeEmail(e) {
        this.setState({
            emailVal: e.target.value
        })
    }

    OnChangePassword(e) {
        this.setState({
            passwordVal: e.target.value
        })
    }


    LoginFunc(e) {
        e.preventDefault()

        const userInfo = {
            email: this.state.emailVal,
            password: this.state.passwordVal
        }

        axios.post('http://localhost:5000/login', userInfo)
            .then(res => { console.log(res.data) })
            .catch(err => {
                if (err.response) {
                    if (err.response.status === 404) {
                        console.log('User Not Found or incorrect email');
                    } else if (err.response.status === 401) {
                        console.log('Incorrect password');
                    } else {
                        console.log(`Error with status code: ${err.response.status}`);
                    }
                } else if (err.request) {
                    console.log('No response received from the server');
                } else {
                    console.log(`Error: ${err.message}`);
                }
            })

        this.setState({
            showPassword: false,
            password: '',
            emailVal: '',
            passwordVal: ''
        })

        window.location = '/'
    }


    render() {

        return (
            <form onSubmit={this.LoginFunc}>
                <h1>LogIn</h1>
                <div className="social-container">
                    <a href="#" className="social"><FacebookIcon /></a>
                    <a href="#" className="social"><GoogleIcon /></a>
                </div>
                <span>or use your account</span>
                <input
                    type="email"
                    placeholder="Email"
                    required
                    value={this.state.emailVal}
                    onChange={this.OnChangeEmail}
                />
                <div className='Visibility'>
                    <input
                        type={this.state.showPassword ? 'text' : 'password'}
                        placeholder='Password'
                        required
                        minLength={8}
                        value={this.state.passwordVal}
                        onChange={this.OnChangePassword}
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
