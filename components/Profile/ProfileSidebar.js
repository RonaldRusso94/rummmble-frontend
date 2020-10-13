import React from 'react';
import ProfilePicture from './ProfilePicture';

export default function ProfileSidebar() {
  return (
    <div className="relative w-72 sm:w-72 md:w-96 lg:w-128 flex flex-col items-center justify-start pb-52">
      <div className="absolute top-0 transform -translate-y-24">
        <ProfilePicture />
      </div>
      <div className="mt-20 tracking-wide">
        <p className="mt-8 mb-2 font-bold text-3xl">Marcela Lagil</p>
        <p className="opacity-75 font-light text-2xl">UX Designer</p>
        <div className="my-10 flex flex-col items-center justify-center text-xl">
          <button type="button" className="mb-6 px-10 py-3 tracking-wider font-semibold rounded-full bg-custom-5-cyan text-custom-0-dblue">Upload New Avatar</button>
          <button type="button" className="px-10 py-3 tracking-widest border border-custom-5-cyan font-light rounded-full bg-custom-0-dblue text-custom-5-cyan">Delete</button>
        </div>
      </div>

      <hr className="w-2/3 border-t-2 border-gray-700" />

      <ul className="w-2/3 tracking-wide my-10 flex flex-col items-start justify-center text-lg">
        <li className="text-left my-2 flex justify-start items-center">
          <img src="/write.png" alt="bio" className="text-sm w-8 h-8 m-2" />
          <p>Enter a Bio</p>
        </li>
        <li className="text-left my-2 flex justify-start items-center">
          <img src="/company.png" alt="company" className="text-sm w-8 h-8 m-2" />
          <p>Enter a Company</p>
        </li>
        <li className="text-left my-2 flex justify-start items-center">
          <img src="/location.png" alt="location" className="text-sm w-8 h-8 m-2" />
          <p>Houston</p>
        </li>
        <li className="text-left my-2 flex justify-start items-center">
          <img src="/internet.png" alt="website" className="text-sm w-8 h-8 m-2" />
          <p>Marcela.net</p>
        </li>
      </ul>

      <hr className="w-2/3 border-t-2 border-gray-700" />

      <p className="w-2/3 text-left tracking-widest my-6 font-semibold text-2xl">Linked Accounts</p>
      <ul className="w-2/3 tracking-wide flex flex-col items-start justify-center text-lg">
        <li className="mb-2 flex justify-start items-center">
          <img src="/facebook.png" alt="facebook" className="text-sm w-6 h-6 m-1" />
          <p>Facebook</p>
        </li>
        <li className="mb-2 flex justify-start items-center">
          <img src="/facebook.png" alt="facebook" className="text-sm w-6 h-6 m-1" />
          <p>Facebook</p>
        </li>
        <li className="mb-2 flex justify-start items-center">
          <img src="/facebook.png" alt="facebook" className="text-sm w-6 h-6 m-1" />
          <p>Facebook</p>
        </li>
        <li className="mb-2 flex justify-start items-center">
          <img src="/facebook.png" alt="facebook" className="text-sm w-6 h-6 m-1" />
          <p>Facebook</p>
        </li>
        <li className="mb-2 flex justify-start items-center">
          <img src="/facebook.png" alt="facebook" className="text-sm w-6 h-6 m-1" />
          <p>Facebook</p>
        </li>
      </ul>
    </div>
  );
}
