import PropTypes from "prop-types";

function Select({ label, options }) {
  return (
    <label>
      <span className="text-gray-700 font-bold">{label}</span>
      <select className="w-full border border-gray-300 p-2 rounded-lg focus:border-blue-300 focus:outline-none focus:ring">
        <option disabled selected value="">
          Select an option
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option.toUpperCase()}
          </option>
        ))}
      </select>
    </label>
  );
}

Select.propTypes = {
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Select;
