import React from 'react';
import PropTypes from 'prop-types';

const ProjectCard = ({
  title,
  description,
  imgSrc,
}) => (
  <div className="w-84 md:w-84 lg:w-96 flex flex-col items-center m-4 rounded-2xl text-black">
    <div className="w-full flex-col">
      <img
        src={imgSrc}
        alt="avatar"
        className="rounded-2xl object-cover"
      />
      <div className="m-auto w-5/6 bg-custom-1-dblue rounded-xl py-2 px-4 text-left transform -translate-y-12">
        <p className="font-semibold tracking-wide text-2xl mb-1 text-gray-100 ">{title}</p>
        <p className="font-semibold text-xl mb-6 leading-none text-gray-400">{description}</p>
      </div>
    </div>
  </div>
);

ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ProjectCard;
