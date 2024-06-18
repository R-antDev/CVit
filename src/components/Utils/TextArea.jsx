import PropTypes from "prop-types";

TextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  name: PropTypes.string,
};

function TextArea({ className, label, value, onChange, name }) {
  return (
    <>
      <label>
        <span className="text-gray-700 font-bold">{label}</span>
        <textarea
          className={`w-full p-2 border border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none focus:ring ${className}`}
          value={value}
          onChange={onChange}
          name={name}
        />
      </label>
    </>
  );
}

export default TextArea;
