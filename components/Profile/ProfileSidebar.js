import React from "react";
import ProfilePicture from "./ProfilePicture";

export default function ProfileSidebar() {
  return (
    <div className="bg-red-500 w-4/12 flex flex-col items-center justify-center pb-52">
      <ProfilePicture />
      <p className="mt-8 mb-4 font-bold text-xl">Marcela Lagil</p>
      <p className="opacity-75">UX Designer</p>
      <button type="button">Upload New Avatar</button>
    </div>
  );
}
