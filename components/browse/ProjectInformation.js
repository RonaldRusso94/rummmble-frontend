import React, { useState } from "react";
import PropTypes from "prop-types";

import ProjectHoverInformation from "./ProjectHoverInformation";
import ProjectTag from "./ProjectTag";

export default function ProjectInformation({
  title,
  description,
  tags,
  numOfLikes,
  numOfComments,
  numOfShares,
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="bg-custom-1-dblue rounded-xl px-4 py-2 text-left">
      <h1 className="text-white text-4xl font-bold mt-3 mb-1">{title}</h1>
      <div
        className="h-24 w-full"
        onMouseOver={() => setIsHovering(true)}
        onMouseOut={() => setIsHovering(false)}
      >
        {!isHovering ? (
          <p className="text-custom-2-gray font-medium text-xl">
            {description}
          </p>
        ) : (
          <ProjectHoverInformation
            numOfLikes={numOfLikes}
            numOfComments={numOfComments}
            numOfShares={numOfShares}
          />
        )}
      </div>
      <div className="ml-4">
        <div className="flex justify-start items-center">
          {tags.map((tag, index) => (
            <ProjectTag tag={tag} key={`${title}-${tag}-${index}`} />
          ))}
        </div>
      </div>
    </div>
  );
}

ProjectInformation.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  tags: PropTypes.arrayOf(PropTypes.string),
  numOfComments: PropTypes.number,
  numOfLikes: PropTypes.number,
  numOfShares: PropTypes.number,
};
