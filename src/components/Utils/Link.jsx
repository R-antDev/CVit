import PropTypes from 'prop-types';

function Link({href, className, text, icon}) {

    return (
            <a href={href} className={className}>
                {text} {icon}
            </a>
    );
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    className: PropTypes.string.isRequired,
    text: PropTypes.string,
    icon: PropTypes.element
};


export default Link;