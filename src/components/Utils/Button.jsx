import PropTypes from "prop-types";

function Button({ label, onClick, icon, className }) {
    return (
        <button
            className={`w-full py-2 px-4 rounded-lg flex items-center justify-center space-x-2 ${className}`}
            onClick={onClick}
        >
            <span className="text-2xl">{icon}</span>
            <span>{label}</span>
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    onClick: PropTypes.func,
    icon: PropTypes.element,
    className: PropTypes.string
};

export default Button;
