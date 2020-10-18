import React from 'react';
import PropTypes from 'prop-types';
import ProfileBannerNavigation from './ProfileBannerNavigation';

const ProfileBanner = ({ setProfileBannerNav, profileBannerNav, amount }) => (
  <div className="h-160 w-full object-center relative">
    <ProfileBannerNavigation
      setProfileBannerNav={setProfileBannerNav}
      profileBannerNav={profileBannerNav}
      amount={amount}
    />
    <img
      alt="Profile Banner"
      className="h-full w-full object-none object-bottom"
      src="/ProfileBanner.png"
    />
  </div>
);

ProfileBanner.propTypes = {
  setProfileBannerNav: PropTypes.func.isRequired,
  profileBannerNav: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ProfileBanner;
