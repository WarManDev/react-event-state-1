import React from "react";
import PropTypes from "prop-types";

export default function ProjectList({ project }) {
  debugger;
  const arr = [];
  project.forEach((o) => arr.push(o));

  return (
    <div className='ProjectList'>
      {arr.map((o) => (
        <div key={Math.random()}>
          <img src={o} alt={1} />
        </div>
      ))}
    </div>
  );
}

ProjectList.propTypes = {
  projects: PropTypes.array,
};
