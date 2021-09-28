import PropTypes from "prop-types";

const Toolbar = ({filters, selected, onSelectFilter}) => {
  return (
    <div className="toggles">
      {filters.map(filter => 
        <div className={filter === selected ? "active toggle" : "toggle"} onClick={() => onSelectFilter(filter)}>{filter}</div>
      )}
    </div>
  )
};

Toolbar.propTypes = {
  filters: PropTypes.array.isRequired,
  selected: PropTypes.string.isRequired,
};

Toolbar.defaultProps = {
  filters: ["All", "Websites", "Flayers", "Business Cards"],
  selected: "All",
};

export default Toolbar;