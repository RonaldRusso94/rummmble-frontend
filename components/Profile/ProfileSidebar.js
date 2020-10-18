import React from 'react';
import ProfilePicture from './ProfilePicture';

const ProfileSidebar = () => (
  <div className="relative bg-blue-300 flex-grow-0 w-full sm:w-72 md:w-96 lg:w-128 flex flex-col items-center pb-52">
    <ProfilePicture />
    <p className="mt-8 mb-4 font-bold text-xl">Marcela Lagil</p>
    <p className="opacity-75">UX Designer</p>
    <button type="button">Upload New Avatar</button>
  </div>
);

export default ProfileSidebar;
