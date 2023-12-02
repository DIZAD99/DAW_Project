import React, { Component, useEffect, useState } from 'react'
import './Login.css'
import FacebookIcon from '@mui/icons-material/Facebook'
import GoogleIcon from '@mui/icons-material/Google'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


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



const SignupSection = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [gender, setGender] = useState('');
    const [birthday, setBirthday] = useState('');
    const [role, setRole] = useState('');
    const [email, setEmail] = useState('');
    const [passwordVal, setPasswordVal] = useState('');

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onChangeFirstName = (e) => {
        setFirstName(e.target.value);
    };

    const onChangeLastName = (e) => {
        setLastName(e.target.value);
    };

    const onChangeEmail = (e) => {
        setEmail(e.target.value);
    };

    const onChangeGender = (e) => {
        setGender(e.target.value);
    };

    const onChangeBirthday = (e) => {
        setBirthday(e.target.value);
    };

    const onChangePassword = (e) => {
        setPasswordVal(e.target.value);
    };

    const onChangeRole = (e) => {
        setRole(e.target.value);
    };

    const signupFunc = (e) => {
        e.preventDefault();

        const userInfo = {
            nom: firstName,
            prenom: lastName,
            genre: gender,
            date_de_Naissance: birthday,
            role: role,
            email: email,
            mot_de_Passe: passwordVal,
        };

        axios
            .post('http://localhost:5000/signup', userInfo)
            .then((res) => console.log(res.data))
            .catch((err) => console.log('Error' + err));

        window.location = '/Login';
    };

    return (
        <form onSubmit={signupFunc}>
            <h1>Create Account</h1>
            <div className="social-container">
                <a href="#" className="social">
                    <FacebookIcon />
                </a>
                <a href="#" className="social">
                    <GoogleIcon />
                </a>
            </div>
            <span>or use your email for registration</span>
            <div className="name">
                <input
                    type="text"
                    placeholder="First Name"
                    required
                    value={firstName}
                    onChange={onChangeFirstName}
                />
                <input
                    type="text"
                    placeholder="Last Name"
                    required
                    value={lastName}
                    onChange={onChangeLastName}
                />
            </div>
            <div className="sexANDdate">
                <select required value={gender} onChange={onChangeGender}>
                    <option value="Male" hidden>
                        Your Gender ?
                    </option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <input
                    type="date"
                    required
                    value={birthday}
                    onChange={onChangeBirthday}
                />
            </div>
            <div className="sexANDdate">
                <select required value={role} onChange={onChangeRole}>
                    <option value="" hidden>
                        Who you are ?
                    </option>
                    <option value="Patinet">Patinet</option>
                    <option value="Doctor">Doctor</option>
                </select>
            </div>
            <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={onChangeEmail}
            />
            <div className="Visibility">
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    required
                    minLength={8}
                    value={passwordVal}
                    onChange={onChangePassword}
                />
                <p>
                    See Password{' '}
                    {showPassword ? (
                        <VisibilityIcon onClick={handleTogglePasswordVisibility} />
                    ) : (
                        <VisibilityOffIcon onClick={handleTogglePasswordVisibility} />
                    )}
                </p>
            </div>
            <button className="Btn">Sign Up</button>
        </form>
    );
};




const LoginSection = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');
    const [emailVal, setEmailVal] = useState('');
    const [passwordVal, setPasswordVal] = useState('');
    const navigate = useNavigate();

    const handleTogglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onChangeEmail = (e) => {
        setEmailVal(e.target.value);
    };

    const onChangePassword = (e) => {
        setPasswordVal(e.target.value);
    };

    const loginFunc = async (e) => {
        e.preventDefault();

        try {
            const userInfo = {
                email: emailVal,
                password: passwordVal,
            };

            const res = await axios.post('http://localhost:5000/login', userInfo);

            console.log(res.data);

            navigate('/login/auth', { state: { email: emailVal } })

        } catch (err) {
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
        }

        setShowPassword(false);
        setPassword('');
        setEmailVal('');
        setPasswordVal('');
    };

    return (
        <form onSubmit={loginFunc}>
            <h1>LogIn</h1>
            <div className="social-container">
                <a href="#" className="social">
                    <FacebookIcon />
                </a>
                <a href="#" className="social">
                    <GoogleIcon />
                </a>
            </div>
            <span>or use your account</span>
            <input
                type="email"
                placeholder="Email"
                required
                value={emailVal}
                onChange={onChangeEmail}
            />
            <div className='Visibility'>
                <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder='Password'
                    required
                    minLength={8}
                    value={passwordVal}
                    onChange={onChangePassword}
                />
                <p>
                    See Password{' '}
                    {showPassword ? (
                        <VisibilityIcon onClick={handleTogglePasswordVisibility} />
                    ) : (
                        <VisibilityOffIcon onClick={handleTogglePasswordVisibility} />
                    )}
                </p>
            </div>
            <a href="#">Forgot your password?</a>
            <button className='Btn'>LogIn</button>
        </form>
    );
};



export default Login;
