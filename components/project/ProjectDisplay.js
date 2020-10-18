import React from 'react';
import PropTypes from 'prop-types';

/*
  a possible issue I see is that if the description card becomes too long, it pushes down the
  comment section and project details

  a possible solution is to implement overflow, but not sure how
  great that would look

  (to test this, just add more text onto either the title or project description)
*/
const ProjectDisplay = ({ title, description, imgSrc }) => (
  <div className="relative max-w-4xl w-5/6 flex flex-col justify-center items-center sm:items-start">
    <div className="rounded-xl bg-gray-300 py-4 sm:py-10 md:py-16 px-3 sm:px-8 md:px-14">
      <img
        src={imgSrc}
        alt="Project"
        className="w-full sm:h-84 lg:h-128 object-cover rounded-lg sm:rounded-none"
      />
    </div>
    <div className="bg-custom-1-dblue rounded-2xl max-w-lg w-5/6 sm:w-7/12 p-3 sm:p-4 md:p-6
                    transform sm:translate-x-4 md:translate-x-8 -translate-y-10 sm:-translate-y-16 md:-translate-y-32 lg:-translate-y-40"
    >
      <p className="font-semibold text-center sm:text-left text-2xl sm:text-3xl md:text-4xl text-white">
        {title}
      </p>
      <p className="text-md leading-snug text-center sm:text-left text-md md:text-lg lg:text-2xl text-custom-2-gray mt-1 sm:mt-2 break-words">
        {description}
      </p>
    </div>
  </div>
);

ProjectDisplay.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ProjectDisplay;
