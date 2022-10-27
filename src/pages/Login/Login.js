import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';
import { GoogleAuthProvider } from 'firebase/auth';
import { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';
import { GithubAuthProvider } from "firebase/auth";

const Login = () => {
    const [error, setError] = useState('');
    const [email, setEmail] = useState('')
    const { providerLogin, verifyEmail, signIn, setLoading, userPasswordReset } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || '/';
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        setEmail(form.email.value);
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                form.reset();
                setError('');
                if (user.emailVerified) {
                    navigate(from, { replace: true });
                }
                else {
                    toast.error('Your email is not verified. Please verify your email address.')
                }
            })
            .catch(error => {
                console.error(error)
                setError(error.message);
            })
            .finally(() => {
                setLoading(false);
            })
    }

    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
            .then(result => {
                const user = result.user;
                verifyEmail();
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }
    const githubProvider = new GithubAuthProvider();
    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => console.error(error))
    }

    const forgotPassword = () => {
        userPasswordReset(email)
            .then(result => {
                toast.success(
                    "Reset your password, new password is sent in your email",
                    {
                        position: "top-center",
                        duration: 5000,
                    }
                );
            })
            .catch(error => { });
    };


    return (
        <div className='bg-img'>
            <div className="login-wrapper">
                <form onSubmit={handleSubmit} action="" className="form">

                    <h2 className='text-2xl'>Login</h2>
                    <div className="input-group">
                        <label htmlFor="loginUser">User Email</label>
                        <input type="email" name="email" id="loginUser" required />

                    </div>
                    <div className="input-group">
                        <label htmlFor="loginPassword">Password</label>
                        <input type="password" name="password" id="loginPassword" required />

                    </div>
                    <div className='text-base text-red-600'>{error}</div>
                    <button className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md' type='submit'>Login</button>
                    <button onClick={forgotPassword} className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md' type='submit'>Forget Password</button>
                    <h3 className='border-t-4'> New User? Then regiser for your account with below buttons</h3>

                    <div className='flex flex-col text-center'>
                        <button className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md'><Link to='/register'>Register</Link></button>
                        <button onClick={handleGoogleSignIn} className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md'>Continue with Google</button>
                        <button onClick={handleGithubSignIn} className='mb-2 bg-transparent hover:bg-violet-700 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded my-3 ml-3 w-64 shadow-md'>Continue with Github</button>
                    </div>
                </form>

            </div>


        </div>
    );
};

export default Login;