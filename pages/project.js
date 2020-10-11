import React from 'react';

function ProjectComponent() {
  return (
    <div className="w-full h-full flex flex-col justify-start items-center font-sans">
      <div id="project" className="relative max-w-4xl h-auto mb-16 flex flex-col flex-center justify-center items-center">
        <div className="rounded-xl bg-gray-300 py-16 px-14 flex items-center justify-center w-full h-auto">
          <img src="/example.png" alt="Project" className="object-cover" />
        </div>
        <div id="description" className="max-w-lg bg-gray-800 absolute left-0 bottom-0 p-6 rounded-2xl transform translate-x-8 translate-y-16">
          <h1 className="font-semibold text-4xl text-white">Example Project</h1>
          <p className="text-2xl text-gray-500 mt-2 mb-4">An epic project that serves as an example. Used for all sorts of neat stuff</p>
        </div>
      </div>
      <div id="info" className="max-w-5xl w-full flex p-6">
        <div id="comments" className="w-2/3 text-gray-300 m-6">
          <h2 className="font-semibold text-2xl text-gray-500">
            0 Comments
          </h2>
          <input className="m-4 p-2 text-xl w-11/12 rounded-md text-gray-500" placeholder="Write something nice..." />
          { /* some sort of list of comments */ }
        </div>
        <div id="stats" className="w-1/3 mx-6 font-semibold text-2xl text-green-400 flex flex-col items-end transform -translate-y-12">
          <div className="w-5/6 mb-4 mr-2 flex items-center justify-evenly">
            <img src="/pfp.png" alt="PFP" className="w-14 h-14 rounded-sm" />
            <a href="/profile" className="text-lg text-center">
              Creator Name
            </a>
          </div>
          <ul className="w-3/4">
            <li className="text-left my-2 flex justify-start items-center">
              <img src="/demo.png" alt="demo" className="w-8 h-8 mr-4 my-2" />
              View Demo
            </li>
            <li className="text-left my-2 flex justify-start items-center">
              <img src="/code.png" alt="code" className="w-8 h-8 mr-4 my-2" />
              View Code
            </li>
            <li className="text-left my-2 flex justify-start items-center">
              <img src="/likes.png" alt="likes" className="w-8 h-8 mr-4 my-2" />
              0 Likes
            </li>
            <li className="text-left my-2 flex justify-start items-center">
              <img src="/calendars.png" alt="calendar" className="w-8 h-8 mr-4 my-2" />
              May 20, 2020
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  return (
    <div className="bg-gray-900 h-screen flex items-start justify-center pt-12">
      <ProjectComponent />
    </div>
  );
}
