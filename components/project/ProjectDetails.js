import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../Icon';

const ProjectDetails = ({
  author, authorImgSrc, demoLink, codeLink, likes, date,
}) => (
  <div className="sm:w-1/3 px-2 lg:px-12 m-4 sm:m-0 font-semibold text-2xl leading-tight text-custom-5-cyan flex flex-col
                  transform md:-translate-y-12 sm:-translate-y-3"
  >
    <div className="w-full mb-2 flex items-center justify-center sm:justify-start">
      <img
        src={authorImgSrc}
        alt="PFP"
        className="text-sm w-14 h-14 object-cover rounded-sm"
      />
      <a href="/profile" className="pl-4 text-lg text-center">
        {author}
      </a>
    </div>
    <ul className="w-full flex flex-col items-center sm:items-start mx-auto px-4 py-1">
      <li className="w-text-left my-2 flex items-center">
        <Icon icon="view-show" className="text-sm w-6 mr-6" />
        <a href={demoLink}>View Demo</a>
      </li>
      <li className="text-left my-2 flex items-center">
        <Icon icon="code" className="text-sm w-6 mr-6" />
        <a href={codeLink}>View Code</a>
      </li>
      <li className="text-left my-2 flex items-center">
        <Icon icon="heart" className="text-sm w-6 mr-6" />
        {`${likes} Likes`}
      </li>
      <li className="text-left my-2 flex items-center">
        <Icon icon="calendar" className="text-sm w-6 mr-6" />
        {date}
      </li>
    </ul>
  </div>
);

ProjectDetails.propTypes = {
  author: PropTypes.string.isRequired,
  authorImgSrc: PropTypes.string.isRequired,
  demoLink: PropTypes.string.isRequired,
  codeLink: PropTypes.string.isRequired,
  likes: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

export default ProjectDetails;
