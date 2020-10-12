import React from 'react';
import PropTypes from 'prop-types';

const CommentCard = ({ author, content, date }) => (
  <div className="w-full bg-gray-200 my-3 p-4 text-black rounded-lg shadow-md">
    <div className="flex p-1 mb-2">
      <img
        src="https://images.unsplash.com/photo-1601900706327-1632f6d48d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="PFP"
        className="object-contain w-8 h-auto border-1 border-black rounded-full"
      />
      <a href="/" className="pl-3 font-semibold flex items-center">{author}</a>
      <p className="text-sm text-right text-gray-700 flex flex-grow items-center justify-end">{date}</p>
    </div>
    <div className="w-full p-1 overflow-auto break-words">{content}</div>
  </div>
);

CommentCard.propTypes = {
  author: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};

export default CommentCard;
