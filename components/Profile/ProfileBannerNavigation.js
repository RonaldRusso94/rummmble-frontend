import React from 'react';
import PropTypes from 'prop-types';

const ProfileTab = ({
  setProfileBannerNav, profileBannerNav, tabName, amount,
}) => (
  <li>
    <button
      type="button"
      onClick={() => setProfileBannerNav(tabName.toLowerCase())}
      className="pb-6 relative focus:outline-none"
    >
      {`${tabName} (${amount})`}
      {profileBannerNav === tabName.toLowerCase()
        && <hr className="absolute bottom-0 border-custom-5-cyan border-b-8 w-full rounded-full" />}
    </button>
  </li>
);

ProfileTab.propTypes = {
  setProfileBannerNav: PropTypes.func.isRequired,
  profileBannerNav: PropTypes.string.isRequired,
  tabName: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

const ProfileTabNavigation = ({ setProfileBannerNav, profileBannerNav, amount }) => (
  <div className="absolute bottom-0 w-1/2  right-0">
    <ul className="flex items-center justify-around text-2xl">
      {['Projects', 'Followers', 'Following'].map((tabName) => (
        <ProfileTab
          setProfileBannerNav={setProfileBannerNav}
          profileBannerNav={profileBannerNav}
          tabName={tabName}
          amount={amount}
        />
      ))}
    </ul>
  </div>
);

ProfileTabNavigation.propTypes = {
  setProfileBannerNav: PropTypes.func.isRequired,
  profileBannerNav: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default ProfileTabNavigation;
