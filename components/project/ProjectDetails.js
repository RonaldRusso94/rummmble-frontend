import React from 'react';
import Icon from '../Icon';

const ProjectDetails = () => (
  <div className="w-1/3 px-12 font-semibold text-2xl leading-tight text-custom-5-cyan flex flex-col transform md:-translate-y-12 sm:-translate-y-3">
    <div className="w-full mb-2 flex items-center justify-around">
      <img
        src="https://images.unsplash.com/photo-1601900706327-1632f6d48d1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
        alt="PFP"
        className="text-sm w-14 h-14 rounded-sm"
      />
      <a href="/profile" className="text-lg text-center">
        Creator Name
      </a>
    </div>
    <ul className="w-full flex flex-col mx-auto px-4 py-1">
      <li className="text-left my-2 flex items-center">
        <Icon icon="view-show" className="text-sm w-6 mr-6" />
        <a href="/">View Demo</a>
      </li>
      <li className="text-left my-2 flex items-center">
        <Icon icon="code" className="text-sm w-6 mr-6" />
        <a href="/">View Code</a>
      </li>
      <li className="text-left my-2 flex items-center">
        <Icon icon="heart" className="text-sm w-6 mr-6" />
        0 Likes
      </li>
      <li className="text-left my-2 flex items-center">
        <Icon icon="calendar" className="text-sm w-6 mr-6" />
        May 20, 2020
      </li>
    </ul>
  </div>
);

export default ProjectDetails;
