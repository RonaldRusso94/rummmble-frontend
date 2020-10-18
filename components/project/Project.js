import React from 'react';
import ProjectDisplay from './ProjectDisplay';
import CommentForm from './CommentForm';
import CommentSection from './CommentSection';
import ProjectDetails from './ProjectDetails';

const Project = () => (
  <div className="w-full mt-12 flex flex-col justify-start items-center font-sans">
    <ProjectDisplay
      title="Example Project"
      description="An epic project that serves as an example. Used for all sorts of neat stuff, but mostly as an example project."
      imgSrc="https://images.unsplash.com/photo-1578975422586-1b81410e15ae?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80"
    />
    <div className="max-w-5xl w-full sm:flex sm:flex-row-reverse p-4 sm:p-6
                    transform -translate-y-8 sm:-translate-y-16 md:-translate-y-24 lg:-translate-y-32"
    >
      <ProjectDetails
        author="Example Author"
        authorImgSrc="https://images.unsplash.com/photo-1601900706327-1632f6d48d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        demoLink="/"
        codeLink="/"
        likes={4}
        date="May 20, 2020"
      />
      <div className="sm:w-7/12 mx-auto text-gray-300 p-2 sm:p-0">
        <CommentForm comments={3} />
        <CommentSection comments={3} />
      </div>
    </div>
  </div>
);

export default Project;
