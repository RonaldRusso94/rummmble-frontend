/* eslint-disable react/prop-types */
import React from 'react';

import ProfileCard from './ProfileCard.js';

const Followers = () => (
  <div className="flex-grow w-2/3 flex flex-wrap justify-evenly bg-red-400 py-8 px-2">
    <ProfileCard />
    <ProfileCard />
    <ProfileCard />
    <ProfileCard />
    <ProfileCard />
    <ProfileCard />
  </div>
);

export default Followers;
