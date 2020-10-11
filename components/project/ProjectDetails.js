const ProjectDetails = () => (
  <div id="stats" className="w-1/3 mx-6 font-semibold text-2xl text-custom-5-cyan flex flex-col items-end transform -translate-y-12">
    <div className="w-5/6 mb-4 mr-2 flex items-center justify-evenly">
      <img src="/pfp.png" alt="PFP" className="text-sm w-14 h-14 rounded-sm" />
      <a href="/" className="text-lg text-center">
        Creator Name
      </a>
    </div>
    <ul className="w-3/4">
      <li className="text-left my-2 flex justify-start items-center">
        <img src="/demo.png" alt="demo" className="text-sm w-8 h-8 mr-4 my-2" />
        <a href="/">View Demo</a>
      </li>
      <li className="text-left my-2 flex justify-start items-center">
        <img src="/code.png" alt="code" className="text-sm w-8 h-8 mr-4 my-2" />
        <a href="/">View Code</a>
      </li>
      <li className="text-left my-2 flex justify-start items-center">
        <img src="/likes.png" alt="likes" className="text-sm w-8 h-8 mr-4 my-2" />
        0 Likes
      </li>
      <li className="text-left my-2 flex justify-start items-center">
        <img src="/calendars.png" alt="calendar" className="text-sm w-8 h-8 mr-4 my-2" />
        May 20, 2020
      </li>
    </ul>
  </div>
);

export default ProjectDetails;
