import PropTypes from "prop-types";

TextArea.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
};

function TextArea({ className, label }) {
  return (
    <>
      <label>
        <span className="text-gray-700 font-bold">{label}</span>
        <textarea
          className={`w-full p-2 border border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none focus:ring ${className}`}
        />
      </label>
    </>
  );
}

export default TextArea;
