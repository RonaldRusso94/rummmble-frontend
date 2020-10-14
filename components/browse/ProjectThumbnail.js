import React from "react";
import PropTypes from "prop-types";

export default function ProjectThumbnail({ children }) {
  return (
    <div className="h-96 w-full relative">
      <img
        className="absolute h-full w-full object-cover rounded-xl bg-custom-2-gray"
        src="https://cdn.dribbble.com/users/427857/screenshots/14384008/media/48afb010968fbfcda13b015ee39fa6c6.png"
      />
      <div className="absolute -bottom-32 w-11/12 text-white z-20">
        {children}
      </div>
    </div>
  );
}

ProjectThumbnail.propTypes = {};
