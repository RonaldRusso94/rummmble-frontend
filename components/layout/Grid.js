import React from "react";

export default function Grid({ children }) {
  return (
    <div className="flex flex-wrap">
      {children.map((child, index) => (
        <div key={`grid-${index}`} className="w-full sm:w-1/2 md:w-1/3 px-2">
          {child}
        </div>
      ))}
    </div>
  );
}
