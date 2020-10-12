import React from "react";
import ProfilePicture from "./ProfilePicture";

export default function ProfileSidebar() {
  return (
    <div className="w-1/4 flex flex-col items-center justify-center">
      <ProfilePicture />
      <p className="mt-8 mb-4 font-bold text-xl">Marcela Lagil</p>
      <p className="opacity-75">UX Designer</p>
    </div>
  );
}
