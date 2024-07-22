// ./src/Popup.js
import React, { useState } from 'react';
import { defaultName } from '../assets/common';
import '../App.css';

const Popup = ({ onClose }) => {
    const [signIn, setSignIn] = useState(false);

    const handleSignInClick = () => {
        setSignIn(!signIn);
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-[#27292D] text-white p-6 rounded-lg max-w-md w-full relative popup-border">
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-white hover:text-gray-300"
                >
                    &#x2715;
                </button>
                <div className="flex flex-col items-center mb-6">
                    <span className="text-[#6B6C70] text-sm">{signIn ? defaultName.signIn : defaultName.signUp}</span>
                    <span className="text-lg mb-4">{signIn ? defaultName.login : defaultName.createAccount}</span>
                </div>

                <div className="mb-2">
                    <label htmlFor="email" className="block text-gray-300 mb-1 text-[#C5C7CA] text-sm">{signIn ? defaultName.emailOrUserName : defaultName.email}</label>
                    <input
                        id="email"
                        type="email"
                        placeholder={signIn ? defaultName.enterEmailOrUsername : defaultName.enterEmail}
                        className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none text-[#7F8084]"
                    />
                </div>

                {!signIn &&
                    <div className="mb-2">
                        <label htmlFor="username" className="block text-gray-300 mb-1 text-[#C5C7CA] text-sm">{defaultName.userName}</label>
                        <input
                            id="username"
                            type="text"
                            placeholder={defaultName.chooseUserName}
                            className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none text-[#7F8084]"
                        />
                    </div>
                }

                <div className="mb-6">
                    <div className='flex flex-row justify-between'>
                        <label htmlFor="password" className="block text-gray-300 mb-1 text-[#C5C7CA] text-sm">{defaultName.password}</label>
                        {signIn && <span className="block text-gray-300 mb-1 text-[#C5C7CA] text-xs">{defaultName.forgetPassword}</span>}
                    </div>
                    <input
                        id="password"
                        type="password"
                        placeholder={signIn ? defaultName.enterPassword : defaultName.choosePassword}
                        className="w-full p-2 bg-gray-700 text-white rounded border border-gray-600 focus:outline-none text-[#7F8084]"
                    />
                </div>

                <button
                    className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 w-full mb-2"
                >
                    {signIn ? defaultName.btn : defaultName.continue}
                </button>

                <div>
                    <span className='text-[#7F8084] text-sm'>{signIn ? defaultName.registered : defaultName.existingAccount}</span>
                    <span className="text-blue-400 text-sm hover:underline cursor-pointer" onClick={handleSignInClick}>{signIn ? defaultName.registerButton : defaultName.loginBtn}</span>
                </div>
            </div>
        </div>
    );
};

export default Popup;
