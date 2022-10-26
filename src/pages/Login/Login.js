import React from 'react';
import './Login.css'

const Login = () => {
    return (
        <div className='bg-img'>
            <div className="login-wrapper">
                <form action="" className="form">

                    <h2 className='text-2xl'>Login</h2>
                    <div className="input-group">
                        <input type="text" name="loginUser" id="loginUser" required />
                        <label htmlFor="loginUser">User Name</label>
                    </div>
                    <div className="input-group">
                        <input type="password" name="loginPassword" id="loginPassword" required />
                        <label htmlFor="loginPassword">Password</label>
                    </div>
                    <input type="submit" value="Login" className="submit-btn" />
                    <a href="#forgot-pw" className="forgot-pw">Forgot Password?</a>
                </form>

                <div id="forgot-pw">
                    <form action="" className="form">
                        <a href="/" className="close">&times;</a>
                        <h2>Reset Password</h2>
                        <div className="input-group">
                            <input type="email" name="email" id="email" required />
                            <label htmlFor="email">Email</label>
                        </div>
                        <input type="submit" value="Submit" className="submit-btn" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;