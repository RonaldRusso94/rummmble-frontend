import React from "react";
import PropTypes from "prop-types";

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
    <div>
      <h1 className="">{title}</h1>
      <div
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {!isHovering ? (
          <p className="">{description}</p>
        ) : (
          <ProjectInformation
            numOfLikes={numOfLikes}
            numOfComments={numOfComments}
            numOfShares={numOfShares}
          />
        )}
      </div>

      {tags.map((tag, index) => (
        <div key={`${title}-${tag}-${index}`} className="text-black">
          {tag}
        </div>
      ))}
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
