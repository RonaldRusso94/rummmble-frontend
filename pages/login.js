import React from 'react';
import { useForm } from 'react-hook-form';
import AuthLayout from '../components/layout/AuthLayout';


const Login = () => {
  return (
    <AuthLayout className="flex flex-row-reverse h-screen"> 
      <div className="flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="font-bold text-2xl text-white mb-2">rummmble</h1>
        </div>
        <div className="text-center mt-4">
          <h1 className="font-normal text-3xl text-white mb-1">Hello</h1>
          <p className="font-normal text-base text-white mb-1 p-5">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>  
        <button type="submit" className="w-1/3 bg-transparent hover:bg-blue-900 text-white font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded-full focus:outline-none">Sign Up</button> 
      </div>
      <LoginForm />
    </AuthLayout>
  )
}

const LoginForm = () => {
  const { register, handleSubmit, errors } = useForm();
  
  const onSubmit = (data) => {
    console.log("Data submitted", data);
  }

  console.log("ERROR", errors);

  return (
    <div className="flex flex-col justify-center m-auto bg-white rounded-r-full h-full">
       <div className="flex flex-col mb-4 py-10">
            <h1 className="font-bold tracking-wide text-3xl text-gray-800 text-center">Sign in to Rummmble</h1>
            <p className="text-xl text-gray-600 text-center">Enter your details below</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center items-center py-8 w-full">
          <div className="mb-4 w-1/3">
            <label htmlFor="inputEmail" className="font-medium tracking-wide text-lg mb-2">Email/Username</label>
            <input  
              type="email" 
              name="email" 
              id="inputEmail" 
              ref={register({
                required: "Email/username is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "Enter a valid email address",
                },
              })}
              autoComplete="off"
              className="w-full appearance-none bg-transparent border-b border-gray-500 text-gray-700 leading-tight focus:outline-none"
            />
            {errors.email && <p className="text-red-700 mt-1">{errors.email.message}</p>}
          </div>
          <div className="mb-4 w-1/3">
            <label htmlFor="inputPassword" className="font-medium tracking-wide text-lg mb-2">Password</label>
            <input 
              name="password" 
              type="password" 
              id="inputPassword"
              ref={register({
                minLength: {
                  value: 8,
                  message: "Password must have min length of 8"
                },
                required: {
                  value: true,
                  message: "Password is required"
                },
                maxLength: {
                  value: 15,
                  message: "Password must have max length of 15"
                }
              })}
              autoComplete="off"
              className="w-full appearance-none bg-transparent border-b border-gray-500 text-gray-700 leading-tight focus:outline-none"
            />
            {errors.password && <p className="text-red-700 mt-1">{errors.password.message}</p>}
          </div>   
          <button type="submit" className="w-1/6 justify-center bg-blue-800 hover:bg-blue-900 focus:outline-none text-gray-200 mt-8 py-2 px-4 rounded-full">Sign In</button>
        </form>
        <footer className="text-center text-gray-500 hover:text-gray-900  underline">
            <a href="#">Forget Password?</a>
        </footer>
      </div>
  )
}

export default Login;

