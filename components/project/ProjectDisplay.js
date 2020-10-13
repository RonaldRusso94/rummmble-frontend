import React from 'react';

const ProjectDisplay = () => (
  <div className="relative max-w-4xl w-5/6 md:mb-16 flex flex-col justify-center items-center">
    <div className="rounded-xl bg-gray-300 py-8 md:py-16 px-6 md:px-14">
      <img
        src="https://images.unsplash.com/photo-1578975422586-1b81410e15ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
        alt="Project"
        className="w-full sm:h-84 lg:h-128 object-cover"
      />
    </div>
    <div className="max-w-lg w-7/12 bg-custom-1-dblue absolute left-0 bottom-0 sm:p-4 md:p-6 rounded-2xl transform sm:translate-x-4 md:translate-x-8 sm:translate-y-8 md:translate-y-16">
      <h1 className="font-semibold text-3xl md:text-4xl text-white">Example Project</h1>
      <p className="text-md leading-snug md:text-lg lg:text-2xl text-custom-2-gray mt-2">
        An epic project that serves as an example.
        Used for all sorts of neat stuff, but mostly as an example project
      </p>
    </div>
  </div>
);

export default ProjectDisplay;
