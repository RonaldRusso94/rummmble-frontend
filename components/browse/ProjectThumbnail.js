import React from "react";
import PropTypes from "prop-types";

export default function ProjectThumbnail() {
  return (
    <div className="h-64 w-full object-center relative">
      <img
        className="h-full w-full object-cover rounded-lg"
        src="https://cdn.dribbble.com/users/427857/screenshots/14384008/media/48afb010968fbfcda13b015ee39fa6c6.png"
      />
    </div>
  );
}

ProjectThumbnail.propTypes = {};
