import React from 'react';

const ProjectDisplay = () => (
  <div className="relative max-w-4xl w-5/6 h-auto mb-16 flex flex-col flex-center justify-center items-center">
    <div className="rounded-xl bg-gray-300 py-16 px-14 flex items-center justify-center w-full h-auto">
      <img src="/example.png" alt="Project" className="object-cover" />
    </div>
    <div className="max-w-lg w-7/12 max-h-full bg-custom-1-dblue absolute left-0 bottom-0 p-6 rounded-2xl transform translate-x-8 translate-y-16">
      <h1 className="font-semibold text-4xl text-white">Example Project</h1>
      <p className="overflow-auto h-24 text-2xl text-custom-2-gray mt-2">An epic project that serves as an example. Used for all sorts of neat stuff</p>
    </div>
  </div>
);

export default ProjectDisplay;
