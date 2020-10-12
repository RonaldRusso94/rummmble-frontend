import React from 'react';
import ProfileBannerNavigation from './ProfileBannerNavigation';

export default function ProfileThumbnail() {
  return (
    <div className="h-160 w-full object-center relative">
      <ProfileBannerNavigation />
      <img
        alt="Profile Banner"
        className="h-full w-full object-none object-bottom"
        src="/ProfileBanner.png"
      />
    </div>
  );
}
