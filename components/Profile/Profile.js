import React, { useState, useEffect } from 'react';
import ProfileBanner from './ProfileBanner';
import ProfileSidebar from './ProfileSidebar';
import ProfileCard from './ProfileDetails/ProfileCard.js';
import ProjectCard from './ProfileDetails/ProjectCard.js';

const Profile = () => {
  const [profileBannerNav, setProfileBannerNav] = useState('followers');

  useEffect(() => {
    console.log(profileBannerNav);
  }, [profileBannerNav]);

  // generates arrays of placeholder values, but needs key prop, not sure what to use for it...
  // probably have to dynamically load projects/followers/following if they are too many
  const amount = 15;

  const content = () => {
    if (profileBannerNav === 'followers') {
      return Array(amount).fill(
        <ProfileCard
          name="Vane Korvind"
          profile="DUXE Signer"
          followers={160}
          following={1}
          imgSrc="https://images.unsplash.com/photo-1602775498090-f574a9c33b92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80"
        />,
      );
    }
    if (profileBannerNav === 'following') {
      return Array(amount).fill(
        <ProfileCard
          name="Dorvin Vanke"
          profile="UX Designer"
          followers={88}
          following={90}
          imgSrc="https://images.unsplash.com/photo-1602829878683-21d060481450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=677&q=80"
        />,
      );
    }
    if (profileBannerNav === 'projects') {
      return Array(amount).fill(
        <ProjectCard
          title="Travel Website"
          description="Do you have trouble staying in touch with your"
          imgSrc="https://images.unsplash.com/photo-1602808180309-2e0c62986635?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1319&q=80"
        />,
      );
    }
    return undefined;
  };

  return (
    <>
      <ProfileBanner
        profileBannerNav={profileBannerNav}
        setProfileBannerNav={setProfileBannerNav}
        amount={amount}
      />
      <div className="flex flex-row w-full">
        <ProfileSidebar />
        <div className="flex-grow w-2/3 flex flex-wrap justify-evenly bg-red-400 py-8 px-2">
          {content()}
        </div>
      </div>
    </>
  );
};

export default Profile;
