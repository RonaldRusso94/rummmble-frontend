import React from "react";
import PropTypes from "prop-types";

export default function ProjectInfoDisplay({ title, amount, iconSrc }) {
  return (
    <div display="flex flex-col items-center justify-evenly">
      <div>
        <img src={iconSrc} />
      </div>
      <p className="text-custom-2-gray">
        {amount} {title}
      </p>
    </div>
  );
}

ProjectInfoDisplay.propTypes = {
  iconSrc: PropTypes.string,
  title: PropTypes.string,
  amount: PropTypes.number,
};
