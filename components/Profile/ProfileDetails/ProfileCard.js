import React from 'react';
import PropTypes from 'prop-types';

const ProfileCard = ({
  name, title, followers, following, imgSrc,
}) => (
  <div className="w-96 md:w-96 lg:w-96 flex flex-col items-center mx-2 my-3 p-6 bg-white rounded-2xl text-black">
    <div className="w-full flex-col items-center justify-center py-4">
      <img
        src={imgSrc}
        alt="avatar"
        className="rounded-full m-auto w-40 h-40 object-cover"
      />
      <p className="text-2xl mt-4">{name}</p>
      <p className="font-bold text-xl text-gray-500">{title}</p>
    </div>
    <div className="w-full flex flex-row justify-between md:justify-evenly text-left">
      <div className="text-xl">
        <p className="font-bold">Followers</p>
        <p className="font-semibold">{followers}</p>
      </div>
      <div className="text-xl">
        <p className="font-bold">Following</p>
        <p className="font-semibold">{following}</p>
      </div>
    </div>
  </div>
);

ProfileCard.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  followers: PropTypes.number.isRequired,
  following: PropTypes.number.isRequired,
  imgSrc: PropTypes.string.isRequired,
};

export default ProfileCard;
