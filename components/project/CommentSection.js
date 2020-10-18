import React from 'react';
import PropTypes from 'prop-types';
import CommentCard from './CommentCard';

const CommentSection = ({ comments }) => (
  <div className="my-8 w-full flex flex-col justify-center items-start">
    {[...Array(comments).keys()].map((key) => (
      <CommentCard
        key={key}
        author="Example Author #2"
        date={(new Date()).toLocaleString()}
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      />
    ))}
  </div>
);

CommentSection.propTypes = {
  comments: PropTypes.number.isRequired,
};

export default CommentSection;
