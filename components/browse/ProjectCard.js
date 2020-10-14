import React from "react";
import PropTypes from "prop-types";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectInformation from "./ProjectInformation";

export default function ProjectCard({
  title,
  description,
  thumbnailSrc,
  tags,
  numOfComments,
  numOfLikes,
  numOfShares,
}) {
  return (
    <div>
      <ProjectThumbnail thumbnailSrc={thumbnailSrc} />
      <ProjectInformation
        title={title}
        description={description}
        tags={tags}
        numOfComments={numOfComments}
        numOfLikes={numOfLikes}
        numOfShares={numOfShares}
      />
    </div>
  );
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
