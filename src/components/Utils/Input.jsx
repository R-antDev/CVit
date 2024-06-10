import PropTypes from "prop-types";

function Input({type, placeholder, className, label, dummy}) {
    Input.propTypes = {
        type: PropTypes.string.isRequired,
        placeholder: PropTypes.string,
        className: PropTypes.string,
        label: PropTypes.string,
        dummy: PropTypes.string
    };
    return (
        <>
            <label>
            <span className="text-gray-700 font-bold">
                {label}
            </span>
            <input
                type={type}
                className={`w-full p-2 border border-gray-300 rounded-lg focus:border-blue-300 focus:outline-none focus:ring ${className}`}
                placeholder={placeholder}
                value={dummy}
            />
            </label>
        </>
    );
}

export default Input;