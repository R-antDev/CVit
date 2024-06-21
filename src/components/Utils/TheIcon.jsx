import {FaTwitter, FaLinkedin, FaGithub} from 'react-icons/fa';
import { BsFacebook } from "react-icons/bs";
import PropTypes from "prop-types";

const getPlatformIcon = (platform) => {
    const icons = {
        facebook: BsFacebook,
        twitter: FaTwitter,
        linkedin: FaLinkedin,
        github: FaGithub,
    };

    return icons[platform.toLowerCase()] || null;
};

export const Icon = ({ platform }) => {
    const IconComponent = getPlatformIcon(platform);
    return IconComponent ? <IconComponent /> : null;
};

Icon.propTypes = {
    platform: PropTypes.string.isRequired,
};
