import React from 'react';
import ProfileTabNavigation from './ProfileTabNavigation';

export default function ProfileThumbnail(props) {
  return (
    <div className="h-160 w-full object-center relative">
      <div className="absolute bottom-0 right-0">
        <ProfileTabNavigation />
      </div>
      <img
        alt="Profile Banner"
        className="h-full w-full object-none object-bottom"
        src="/ProfileBanner.png"
      />
    </div>
  );
}
