// ./src/Post.js
import React from 'react';
import Icon from '../assets/svg/Dots Horizontal.svg';
import Shape from '../assets/svg/Shape.svg';
import '../App.css';

const Post = ({ name, time, content, comments, src, reaction }) => {
    return (
        <div className="bg-[#27292D] p-4 rounded-lg mb-4 post-border">
            <div className="flex items-center mb-2">
                <img src={src} alt="avatar" className="w-10 h-10 rounded-full mr-3" />
                <div className='flex justify-between w-full'>
                    <div className="flex flex-col">
                        <span>{name}</span>
                        <span className="text-gray-500">{time}</span>
                    </div>
                    <img src={Icon} />
                </div>
            </div>
            <div className="bg-[#191920] flex flex-row p-4 rounded-lg">
                <div className="flex bg-[#27292D] items-center justify-center w-28 h-10 rounded-full mr-3">
                    <span className="">{reaction}</span>
                </div>
                {content}
            </div>
            {comments && <div className="text-gray-500 mt-2 flex gap-2.5"><img src={Shape} />{comments} comments</div>}
        </div>
    );
};

export default Post;
