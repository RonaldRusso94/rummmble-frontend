import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import AuthLayout from '../components/layout/AuthLayout';

const SignUp = () => {
  return (
    <AuthLayout className="flex h-screen">
       <div className="flex flex-col justify-center items-center h-auto">
       <div className="text-center">
          <h1 className="font-bold text-2xl text-white mb-2">rummmble</h1>
        </div>
        <div className="text-center mt-4">
          <h1 className="font-normal text-3xl text-white mb-1">Welcome back!</h1>
          <p className="font-normal text-base text-white mb-1 p-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>  
        <button type="submit" className="w-1/3 bg-transparent hover:bg-blue-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full focus:outline-none">Sign In</button> 
       </div>
       <SignUpForm />
    </AuthLayout>
  )
}


const SignUpForm = () => {
  const { register, errors, handleSubmit, watch } = useForm({});
  const password = useRef({});
  password.current = watch("password", "");
  
  const onSubmit = (data) => {
    console.log("Data submitted", data);
  }

  console.log("ERROR", errors);

  return (
    <div className="w-full flex flex-col justify-center center-items m-auto bg-white rounded-l-full h-full">
       <div className="flex flex-col mb-2 py-10">
            <h1 className="font-bold tracking-wide text-3xl text-gray-800 text-center">Create Your Account</h1>
            <p className="text-xl text-gray-600 text-center">Get Inspired with Designs by our Talented community</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap mx-auto py-8 w-2/4">
          <div className=" mb-4 w-full">
            <label htmlFor="inputEmail" className="block font-medium tracking-wide text-lg mb-2">Email</label>
            <input  
              type="email" 
              name="email" 
              id="inputEmail" 
              placeholder="@gmail.com"
              ref={register({
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid email address",
                },
              })}
              className="w-full block appearance-none bg-transparent border-b border-gray-500 text-gray-700 leading-tight focus:outline-none"
            />
            {errors.email && <p className="text-red-700 mt-1">{errors.email.message}</p>}
          </div>
          <div className=" mb-4 w-full">
            <label htmlFor="inputUsername" className="block font-medium tracking-wide text-lg mb-2">Username</label>
            <input  
              type="username" 
              name="username" 
              id="inputUsername" 
              ref={register({
                required: "Username is required",
              })}
              className="w-full block appearance-none bg-transparent border-b border-gray-500 text-gray-700 leading-tight focus:outline-none"
            />
            {errors.username && <p className="text-red-700 mt-1">{errors.username.message}</p>}
          </div>
          <div className=" mb-4 w-full">
            <label htmlFor="inputPassword" className="block font-medium tracking-wide text-lg mb-2">Password</label>
            <input 
              name="password" 
              type="password" 
              id="inputPassword"
              ref={register({
                minLength: {
                  value: 8,
                  message: "Password must have min length of 8"
                },
                required: "Password is required",
                maxLength: {
                  value: 15,
                  message: "Password must have max length of 15"
                }
              })}
              className="w-full block appearance-none bg-transparent border-b border-gray-500 text-gray-700 leading-tight focus:outline-none"
            />
            {errors.password && <p className="text-red-700 mt-1">{errors.password.message}</p>}
          </div> 
          <div className=" mb-4 w-full">
            <label htmlFor="inputConfirmPassword" className="block font-medium tracking-wide text-lg mb-2">Confirm password</label>
            <input
              name="confirmPassword"
              type="password"
              id="inputConfirmPassword"
              ref={register({
                required: "Password is required",
                validate: value =>
                  value === password.current || "The passwords do not match"
              })}
              className="w-full block appearance-none bg-transparent border-b border-gray-500 text-gray-700 leading-tight focus:outline-none"
            />
            {errors.confirmPassword && <p className="text-red-700 mt-1">{errors.confirmPassword.message}</p>}
          </div>  
          <button type="submit" className="w-1/3 mx-auto bg-blue-800 hover:bg-blue-900 focus:outline-none text-gray-200 mt-8 py-2 px-4 rounded-full">Sign Up</button>
        </form>
    </div>
  )
}

export default SignUp;