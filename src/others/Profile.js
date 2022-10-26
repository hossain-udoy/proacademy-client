import React, { useContext, useRef, useState } from 'react';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';

const Profile = () => {
    const { user, updateUserProfile } = useContext(AuthContext);
    const [name, setName] = useState(user.displayName);
    const photoURLRef = useRef(user.photoURL);

    const handleSubmit = event => {
        event.preventDefault();
        const photourl = photoURLRef.current.value;
        updateUserProfile(name, photourl)
    }

    const handleNameChange = event => {

        setName(event.target.value)
    }

    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="px-8 py-6 mx-4 mt-4 text-left bg-white shadow-lg md:w-1/3 lg:w-1/3 sm:w-1/3">

                    <form onSubmit={handleSubmit} action="">
                        <div className="mt-4">
                            <div>
                                <label className="block" htmlFor="Name">Name</label>
                                <input type="text" onChange={handleNameChange} defaultValue={name} name="name" placeholder="Name"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                            </div>
                            <div>
                                <label className="block" htmlFor="Name">Photo</label>
                                <input type="text" name="photoURL" defaultValue={user?.photoURL} placeholder="Photo URL"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                            </div>
                            <div className="mt-4">
                                <label className="block" readOnly defaultValue={user?.email} htmlFor="email">Email</label>

                                <input type="email" name="email" placeholder="Email"
                                    className="w-full px-4 py-2 mt-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-600" />

                            </div>
                            <div className="flex" >
                                <button className="w-full px-6 py-2 mt-4 text-white bg-blue-600 rounded-lg hover:bg-blue-900" type='submit'>Submit</button>
                            </div>

                        </div>
                    </form>
                </div>
            </div>
        </div>
    );

};

export default Profile;