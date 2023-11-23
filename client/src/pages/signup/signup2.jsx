import React, { useState } from 'react';
import backgroundImg from '../assets/background.png';
import joinImg from '../assets/join.png';

export default function Signup() {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);};
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <img src={backgroundImg} alt="" className="absolute top-0 left-0 w-full h-full object-cover" />

      {/* Content Container */}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center rounded">

        {/* Section du formulaire à droite */}
        <div className="w-3/4 bg-white shadow-md rounded p-1 flex">
          {/* Section de l'image à gauche */}
          <div className="w-1/3">
            <img src={joinImg} alt="" className="w-full h-full object-cover" />
          </div>
          {/* Les éléments du formulaire */}
          <form className="w-2/3 px-5 pt-10 pb-2 mb-4">
            {/* first name and last name*/}
            <div className="mb-4">
              <div className="flex">
                <input
                  className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
                  id="username"
                  type="text"
                  placeholder="First name"
                />
                <input
                  className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="lastName"
                  type="text"
                  placeholder="Last name"
                />
              </div>
            </div>

            {/* sexe and date of birth */}
            <div className="mb-4">
              <div className="flex">
                <select
                  className="bg-gray-200 shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-non focus:shadow-outline mr-4"
                  id="sex"
                >
                  <option value="male">Man</option>
                  <option value="female">Woman</option>
                </select>
                <input
                  className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="dob"
                  type="date"
                />
              </div>
            </div>

            {/* email */}
            <div className="mb-4">
              
                <input
                  className="bg-gray-200 shadow appearance-none border rounded w-full py-1 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-4"
                  id="email"
                  type="email"
                  placeholder="e-mail adresse "
                />
              
            </div>

            {/*password confirm password */}
            <div className="mb-4 ">
        <div className="flex">
          <input
            className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
            id="password"
            type={showPassword ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
          />


<button
        type="button"
        className="absolute top-0 right-0 mt-2 mr-2 cursor-pointer"
        style={{ visibility: 'hidden' }}
        onClick={togglePasswordVisibility}
      >
        {showPassword ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            ></path>
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M2 2l20 20M4.51 15a9.7 9.7 0 002.13 2.67M7.7 6.8A9.7 9.7 0 0010 6"
            ></path>
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0zM4.93 4.93a9.996 9.996 0 0114.14 0m-1.41-1.41a9.996 9.996 0 010 14.14"
            ></path>
          </svg>
        )}
      </button>
          
        

    
                  
        
              <input
                className="bg-gray-200 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="confirmPassword"
                type="password"
                placeholder="Confirm password"
              />

            </div>
            </div>
            


            {/* button create account */}
            <div className="flex items-center justify-center">
              <button
                className="bg-blue-700  hover:bg-blue-700 text-white font-bold py-2 px-60 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Create Account
              </button>
            </div>

             {/* button have account? */}
            <div className="flex items-center justify-center">
              <button
                className=" text-blue-700 font-bold py-2 px-60 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Have Account?
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
