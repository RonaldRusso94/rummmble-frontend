import React from 'react';
import ProjectDisplay from './ProjectDisplay';
import CommentForm from './CommentForm';
import CommentSection from './CommentSection';
import ProjectDetails from './ProjectDetails';

const Project = () => (
  <div className="w-full mt-12 flex flex-col justify-start items-center font-sans">
    <ProjectDisplay />
    <div className="max-w-5xl w-full flex p-6">
      <div className="w-7/12 mx-auto text-gray-300 m-6">
        <CommentForm />
        <CommentSection />
      </div>
      <ProjectDetails />
    </div>
  </div>
);

export default Project;
