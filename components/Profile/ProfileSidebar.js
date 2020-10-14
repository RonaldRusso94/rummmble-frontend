import React from 'react';
import ProfilePicture from './ProfilePicture';

/* fill color for icons will be an issue, because the icons currently implemented
don't contrast enough with the dark background, plus it seems like we're going
to have to make the icon colors dynamic (on whether or not they've been added)
using SVG icons like those found in http://www.zondicons.com/ might be a good solution, but has to be downloaded

*/

export default function ProfileSidebar() {
  return (
    <div className="relative w-72 sm:w-72 md:w-96 lg:w-128 flex flex-col items-center pb-52">
      <div className="absolute top-0 transform -translate-y-24">
        <ProfilePicture />
      </div>
      <div className="mt-20 tracking-wide">
        <p className="mt-8 mb-2 font-bold text-3xl">Marcela Lagil</p>
        <p className="opacity-75 font-light text-2xl">UX Designer</p>
        <div className="mt-10 flex flex-col items-center text-xl">
          <button
            type="button"
            onClick={() => document.getElementById('inputAvatarFile').click()}
            className="mb-6 px-10 py-3 tracking-wider font-semibold rounded-full bg-custom-5-cyan text-custom-0-dblue focus:outline-none"
          >
            Upload New Avatar
            <input id="inputAvatarFile" type="file" className="hidden" />
          </button>
          <button
            type="button"
            className="px-10 py-3 tracking-widest border border-custom-5-cyan font-light rounded-full bg-custom-0-dblue text-custom-5-cyan focus:outline-none"
          >
            Delete
          </button>
        </div>
      </div>

      <hr className="w-2/3 border-t-2 border-gray-700 mt-6 mb-4" />

      <p className="text-center tracking-widest font-semibold text-2xl mb-2">Profile</p>
      <ul className="w-1/2 tracking-wider font-thin flex flex-col text-xl">
        <li className="my-2 flex items-center">
          <img src="https://static.thenounproject.com/png/343422-200.png" alt="bio" className="text-sm w-8 h-8 mr-4" />
          <p className="text-custom-5-cyan">Enter a Bio</p>
        </li>
        <li className="my-2 flex items-center">
          <img src="https://static.thenounproject.com/png/621754-200.png" alt="company" className="text-sm w-8 h-8 mr-4" />
          <p className="text-custom-5-cyan">Enter a Company</p>
        </li>
        <li className="my-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1047157-200.png" alt="location" className="text-sm w-8 h-8 mr-4" />
          <p className="text-gray-400">Houston</p>
        </li>
        <li className="my-2 flex items-center">
          <img src="https://static.thenounproject.com/png/3340626-200.png" alt="website" className="text-sm w-8 h-8 mr-4" />
          <p className="text-gray-400">Marcela.net</p>
        </li>
      </ul>

      <hr className="w-2/3 border-t-2 border-gray-700 mt-6 mb-4" />

      <p className="text-center tracking-widest font-semibold text-2xl mb-2">Linked Accounts</p>
      <ul className="w-2/3 tracking-widest font-light flex flex-col text-lg">
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="facebook" className="text-sm w-4 h-4 mr-4" />
          <p className="text-custom-5-cyan">Facebook</p>
        </li>
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="facebook" className="text-sm w-4 h-4 mr-4" />
          <p className="text-custom-5-cyan">Twitter</p>
        </li>
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="facebook" className="text-sm w-4 h-4 mr-4" />
          <p className="text-custom-5-cyan">Google</p>
        </li>
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="facebook" className="text-sm w-4 h-4 mr-4" />
          <p className="text-custom-5-cyan">Begance</p>
        </li>
        <li className="mt-2 flex items-center">
          <img src="https://static.thenounproject.com/png/1809809-200.png" alt="facebook" className="text-sm w-4 h-4 mr-4" />
          <p className="text-custom-5-cyan">LinkedIn</p>
        </li>
      </ul>
    </div>
  );
}
