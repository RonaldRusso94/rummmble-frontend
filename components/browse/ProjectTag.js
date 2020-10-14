import React from "react";
import PropTypes from "prop-types";

export default function ProjectTag({ tag }) {
  return (
    <div className="rounded-lg bg-custom-6-cyan w-24 py-1 mr-8 text-center">
      <span className="text-custom-1-dblue font-medium">{tag}</span>
    </div>
  );
}

ProjectTag.propTypes = {
  tag: PropTypes.string,
};
