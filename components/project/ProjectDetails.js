import React from 'react';

const ProjectDetails = () => (
  <div className="w-1/3 px-12 font-semibold text-2xl leading-tight text-custom-5-cyan flex flex-col transform md:-translate-y-12 sm:-translate-y-3">
    <div className="w-full mb-2 flex items-center justify-around">
      <img
        src="https://images.unsplash.com/photo-1601900706327-1632f6d48d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="PFP"
        className="text-sm w-14 h-14 rounded-sm"
      />
      <a href="/" className="text-lg text-center">
        Creator Name
      </a>
    </div>
    <ul className="w-full flex flex-col mx-auto px-4">
      <li className="text-left my-2 flex items-center">
        <img src="/demo.png" alt="demo" className="text-sm w-8 h-8 mr-4 my-2" />
        <a href="/">View Demo</a>
      </li>
      <li className="text-left my-2 flex items-center">
        <img src="/code.png" alt="code" className="text-sm w-8 h-8 mr-4 my-2" />
        <a href="/">View Code</a>
      </li>
      <li className="text-left my-2 flex items-center">
        <img src="/likes.png" alt="likes" className="text-sm w-8 h-8 mr-4 my-2" />
        0 Likes
      </li>
      <li className="text-left my-2 flex items-center">
        <img src="/calendars.png" alt="calendar" className="text-sm w-8 h-8 mr-4 my-2" />
        May 20, 2020
      </li>
    </ul>
  </div>
);

export default ProjectDetails;
