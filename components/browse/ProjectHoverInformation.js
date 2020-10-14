import React from "react";
import PropTypes from "prop-types";
import ProjectInfoDisplay from "./ProjectInfoDisplay";

export default function ProjectHoverInformation({
  numOfLikes,
  numOfComments,
  numOfShares,
}) {
  return (
    <div className="flex justify-evenly items-center h-full">
      <ProjectInfoDisplay title="likes" amount={numOfLikes} />
      <ProjectInfoDisplay title="comments" amount={numOfComments} />
      <ProjectInfoDisplay title="shares" amount={numOfShares} />
    </div>
  );
}
ProjectHoverInformation.propTypes = {
  numOfLikes: PropTypes.number,
  numOfComments: PropTypes.number,
  numOfShares: PropTypes.number,
};
