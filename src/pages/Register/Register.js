import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../others/hero';
import toast from 'react-hot-toast';
import { useContext, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider/AuthProvider';

const Register = () => {
    const [error, setError] = useState('');
    const [accepted, setAccepted] = useState(false);
    const { createUser, updateUserProfile, verifyEmail } = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        // console.log(name, photoURL, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                setError('');
                form.reset();
                handleUpdateUserProfile(name, photoURL);
                handleEmailVerification();
                toast.success('Please verify your email address.')
            })
            .catch(e => {
                console.error(e);
                setError(e.message);
            });
    }

    const handleUpdateUserProfile = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }

        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleEmailVerification = () => {
        verifyEmail()
            .then(() => { })
            .catch(error => console.error(error));
    }

    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <div>
            <Hero></Hero>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">
                    <h3 className="text-2xl font-bold text-center">Join us</h3>
                    <form onSubmit={handleSubmit} action="">
                        <div className="mt-4">
                            <div>
                                <label className="block" htmlFor="Name">Name</label>
                                <input type="text" name="name" placeholder="Name"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                            </div>
                            <div>
                                <label className="block" htmlFor="Name">Photo</label>
                                <input type="text" name="photoURL" placeholder="Photo URL"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                            </div>
                            <div className="mt-4">
                                <label className="block" htmlFor="email">Email</label>

                                <input type="email" name="email" placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                            </div>
                            <div className="mt-4">
                                <label className="block">Password</label>
                                <input type="password" name="password" placeholder="Password"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />
                            </div>


                            <div className='flex gap-2'>

                                <input type="checkbox"
                                    onClick={handleAccepted} />
                                <label className="block">{<>Accept <Link to="/terms">Terms</Link></>} and conditions</label>
                            </div>
                            <div className="flex" >
                                <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" disabled={!accepted}>Create
                                    Account</button>
                            </div>

                            <div className='text-base text-red-600'>{error}</div>
                            <div className="mt-6 text-grey-dark">
                                Already have an account?
                                <Link className="text-blue-600 hover:underline " href="/login">
                                    Log in
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;