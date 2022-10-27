import React from 'react';
import { useState } from 'react';

const Item = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border rounded shadow-sm">
            <button
                type="button"
                aria-label="Open item"
                title="Open item"
                className="flex items-center justify-between w-full p-4 focus:outline-none"
                onClick={() => setIsOpen(!isOpen)}
            >
                <p className="text-lg font-medium">{title}</p>
                <div className="flex items-center justify-center w-8 h-8 border rounded-full">
                    <svg
                        viewBox="0 0 24 24"
                        className={`w-3 text-gray-600 transition-transform duration-200 ${isOpen ? 'transform rotate-180' : ''
                            }`}
                    >
                        <polyline
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            points="2,7 12,17 22,7"
                            strokeLinejoin="round"
                        />
                    </svg>
                </div>
            </button>
            {isOpen && (
                <div className="p-4 pt-0">
                    <p className="text-white">{children}</p>
                </div>
            )}
        </div>
    );
};

const Questions = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                <div className="flex flex-col mb-16 sm:text-center">
                    <a href="/" className="mb-6 sm:mx-auto">

                    </a>
                    <div className="max-w-xl md:mx-auto sm:text-center lg:max-w-2xl">
                        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
                            <span className="relative inline-block">

                                <span className="relative">Here</span>
                            </span>{' '}
                            Are Some Faq's
                        </h2>
                        <p className="text-base text-black md:text-lg">
                            You can give us your questions through newsletter.We will try to answer.
                        </p>
                    </div>
                </div>
                <div className="space-y-4">
                    <Item title="What is cors?">
                        Cross-origin resource sharing is a mechanism that allows restricted resources on a web page to be requested from another domain outside the domain from which the first resource was served. A web page may freely embed cross-origin images, stylesheets, scripts, iframes, and videos.
                    </Item>
                    <Item title="Why are you using firebase?">
                        Firebase is great for quick projects: it's easy to set up, fast, in many cases requires only front-end logic. It lets you focus on your app instead of implementing custom authentication, web sockets or database connections.
                    </Item>
                    <Item title="What other options do you have to implement authentication?">
                        Common Authentication Types
                        a) Password-based authentication. Passwords are the most common b)methods of authentication. ...
                        c)Multi-factor authentication. ...
                        d)Certificate-based authentication. ...
                        e)Biometric authentication. ...
                        f)Token-based authentication.
                    </Item>
                    <Item title="What is Node? How does Node work?">
                        It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node. js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.
                    </Item>
                    <Item title="How does the private route work?">
                        The react private route component renders child components ( children ) if the user is logged in. If not logged in the user is redirected to the /login page with the return url passed in the location state property.
                    </Item>
                </div>
            </div>
        </div>
    );
};

export default Questions;