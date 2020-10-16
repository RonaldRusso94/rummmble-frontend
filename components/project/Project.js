import React from 'react';
import ProjectDisplay from './ProjectDisplay';
import CommentForm from './CommentForm';
import CommentSection from './CommentSection';
import ProjectDetails from './ProjectDetails';

const Project = () => (
  <div className="w-full mt-12 flex flex-col justify-start items-center font-sans">
    <ProjectDisplay />
    <div className="max-w-5xl w-full sm:flex sm:flex-row-reverse p-4 sm:p-6
                    transform -translate-y-8 sm:-translate-y-16 md:-translate-y-24 lg:-translate-y-32"
    >
      <ProjectDetails />
      <div className="sm:w-7/12 mx-auto text-gray-300 p-2 sm:p-0">
        <CommentForm />
        <CommentSection />
      </div>
    </div>
  </div>
);

export default Project;
