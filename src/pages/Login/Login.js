import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'

const Login = () => {
    return (
        <div className='bg-img'>
            <div className="login-wrapper">
                <form action="" className="form">

                    <h2 className='text-2xl'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="loginUser">User Name</label>
                        <input type="text" name="loginUser" id="loginUser" required />

                    </div>
                    <div className="input-group">
                        <label htmlFor="loginPassword">Password</label>
                        <input type="password" name="loginPassword" id="loginPassword" required />

                    </div>
                    <button className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md' type='submit'>Login</button>
                    <button className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md' type='submit'>Forget Password</button>
                    <h3 className='border-t-4'> New User? Then regiser for your account with below buttons</h3>

                    <div className='flex flex-col text-center'>
                        <button className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md'><Link to='/register'>Register</Link></button>
                        <button className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md'>Continue with Google</button>
                        <button className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md'>Continue with Github</button>
                    </div>
                </form>

            </div>


        </div>
    );
};

export default Login;