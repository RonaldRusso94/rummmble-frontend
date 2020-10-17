/* eslint-disable react/prop-types */
import React from 'react';

// yeah this things got issues...

const ProfileTab = ({ setProfileBannerNav, profileBannerNav, tabName }) => (
  <li>
    <button
      type="button"
      onClick={() => setProfileBannerNav(tabName.toLowerCase())}
      className="pb-6 relative focus:outline-none"
    >
      {`${tabName} (25)`}
      {profileBannerNav === tabName.toLowerCase()
      && <hr className="absolute bottom-0 border-custom-5-cyan border-b-8 w-full rounded-full" />}
    </button>
  </li>
);

export default function ProfileTabNavigation({ setProfileBannerNav, profileBannerNav }) {
  return (
    <div className="absolute bottom-0 w-1/2  right-0">
      <ul className="flex items-center justify-around text-2xl">
        <ProfileTab setProfileBannerNav={setProfileBannerNav} profileBannerNav={profileBannerNav} tabName="Projects" />
        <ProfileTab setProfileBannerNav={setProfileBannerNav} profileBannerNav={profileBannerNav} tabName="Followers" />
        <ProfileTab setProfileBannerNav={setProfileBannerNav} profileBannerNav={profileBannerNav} tabName="Following" />
      </ul>
    </div>
  );
}
