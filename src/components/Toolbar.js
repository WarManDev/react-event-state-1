import React from "react";
import PropTypes from "prop-types";

export default function Tolbar({ filters, selected, onSelectFilter }) {
  return (
    <div>
      {filters.map((o) => {
        return (
          <button
            onClick={() => onSelectFilter(o)}
            key={o}
            className={o === selected ? "btn__active btn-selected" : "btn"}
          >
            {o}
          </button>
        );
      })}
    </div>
  );
}

Tolbar.propTypes = {
  filters: PropTypes.array,
  selected: PropTypes.string,
  onSelectFilter: PropTypes.func,
};

Tolbar.defaultProps = {
  filters: ["All"],
  selected: "All",
  onSelectFilter: () => {},
};
