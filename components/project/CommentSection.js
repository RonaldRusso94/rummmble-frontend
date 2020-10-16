import React from 'react';
import CommentCard from './CommentCard';

const CommentSection = () => (
  <div className="my-8 w-full flex flex-col justify-center items-start">
    <CommentCard author="Example Author #1" date={(new Date()).toLocaleString()} content="Pretty good, 10/10" />
    <CommentCard author="Example Author #2" date={(new Date()).toLocaleString()} content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
    <CommentCard author="Example Author #3" date={(new Date()).toLocaleString()} content="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
  </div>
);

export default CommentSection;
