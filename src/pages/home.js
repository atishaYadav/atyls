// ./src/Home.js
import React, { useState } from 'react';
import Post from '../components/post';
import Popup from '../components/popup';
import { defaultName, posts } from '../assets/common';
import '../App.css';

const Home = () => {
    const [showPopup, setShowPopup] = useState(false);

    const handlePostClick = () => {
        setShowPopup(true);
    };

    const handleClosePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="min-h-screen bg-[#131319] text-white p-6">
            <div className="max-w-xl mx-auto">
                <h1 className="text-3xl mb-4">{defaultName.defaultName}</h1>
                <p className="mb-8">{defaultName.message} 🧑‍🤝‍🧑</p>

                <div className="bg-[#27292D] p-4 rounded-lg mb-4 post-border">
                    <span className="text-[#C5C7CA]">{defaultName.createPost}</span>
                    <div className="relative mt-2">
                        <div className="flex bg-[#27292D] items-center justify-center w-10 h-10 rounded-full mr-3 absolute left-3 top-4"><span className="">💬</span></div>
                        <input
                            type="text"
                            placeholder={defaultName.postMessage}
                            className="w-full p-6 pl-14 text-white rounded-lg focus:outline-none bg-[#191920]"
                        />
                    </div>
                    <div className="flex w-full justify-end">
                        <button
                            onClick={handlePostClick}
                            className="mt-2 bg-blue-500 text-white py-1.5 px-6 rounded hover:bg-blue-600"
                        >
                            Post
                        </button>
                    </div>
                </div>

                {showPopup && <Popup onClose={handleClosePopup}/>}

                {posts.map((post, index) => (
                    <Post
                        key={index}
                        name={post.name}
                        time={post.time}
                        content={post.content}
                        comments={post.comments}
                        src={post.src}
                        reaction={post.reaction}
                    />
                ))}
            </div>
        </div>
    );
};

export default Home;
