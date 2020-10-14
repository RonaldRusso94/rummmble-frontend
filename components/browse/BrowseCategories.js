import React, { useState } from "react";

export default function BrowseCategories({ categories, handleChange }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <ul className="flex text-white justify-between">
      {categories.map((category, index) => (
        <li
          key={`${category}-${index}`}
          onClick={() => {
            setActiveIndex(index);
            handleChange(category);
          }}
          className="px-4 cursor-pointer font-bold text-custom-5-cyan text-xl"
        >
          <div
            className={
              activeIndex === index
                ? "border-b-2 border-custom-5-cyan py-1"
                : "py-1"
            }
          >
            {category}
          </div>
        </li>
      ))}
    </ul>
  );
}
