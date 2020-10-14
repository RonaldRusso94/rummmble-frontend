import React from "react";
import PropTypes from "prop-types";

export default function ProjectCard() {
  return <div></div>;
}

ProjectCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  thumbnailSrc: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  numOfComments: PropTypes.number,
  numOfLikes: PropTypes.number,
  numOfShares: PropTypes.number,
};
