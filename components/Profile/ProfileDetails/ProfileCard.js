/* eslint-disable react/prop-types */
import React from 'react';

const ProfileCard = () => (
  <div className="w-1/4 flex flex-col items-center mx-2 my-3 p-6 bg-white rounded-lg text-black">
    <div className="w-full flex-col items-center justify-center py-4">
      <img
        src="https://images.unsplash.com/photo-1602829878683-21d060481450?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=677&q=80"
        alt="avatar"
        className="rounded-full m-auto w-40 h-40 object-cover"
      />
      <p className="text-2xl mt-4">Vane Korvind</p>
      <p className="font-bold text-xl text-gray-500">DUXE Signer</p>
    </div>
    <div className="w-full flex flex-row px-4 justify-between text-left">
      <div className="text-xl">
        <p className="font-bold">Followers</p>
        <p className="font-semibold">200</p>
      </div>
      <div className="text-xl">
        <p className="font-bold">Following</p>
        <p className="font-semibold">200</p>
      </div>
    </div>
  </div>
);

export default ProfileCard;
