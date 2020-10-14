import React from 'react';

export default function ProfileTabNavigation({ setProfileBannerNav }) {
  return (
    <div className="absolute bottom-4 w-6/12 right-0 px-32">
      <ul className="flex items-center justify-around text-lg">
        <li>
          <button type="button" onClick={() => setProfileBannerNav('projects')}>Projects (6)</button>
        </li>
        <li>
          <button type="button" onClick={() => setProfileBannerNav('followers')}>Followers (550)</button>
        </li>
        <li>
          <button type="button" onClick={() => setProfileBannerNav('following')}>Following (50)</button>
        </li>
      </ul>
    </div>
  );
}
