import React from "react";
import ProfileTabNavigation from "./ProfileTabNavigation";

export default function ProfileThumbnail(props) {
  return (
    <div className="h-160 w-full object-center relative">
      <div className="absolute bottom-0 right-0">
        <ProfileTabNavigation />
      </div>
      <img
        className="h-full w-full object-none object-bottom"
        src="https://images.unsplash.com/photo-1444080748397-f442aa95c3e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1780&q=80"
      />
    </div>
  );
}
