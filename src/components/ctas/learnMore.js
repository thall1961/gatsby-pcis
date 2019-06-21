import React from 'react';
import {Link} from 'gatsby';

const LinkStyles = {
    WebkitFontSmoothing: 'antialiased',
    cursor: 'pointer',
    MozUserSelect: 'none',
    WebkitUserSelect: 'none',
    OUserSelect: 'none',
    userSelect: 'none',
    display: 'inline-block',
    fontWeight: 'normal',
    textAlign: 'center',
    textDecoration: 'none',
    fontFamily: 'sans-serif',
    background: 'rgb(3,169,244)',
    color: 'rgb(255, 255, 255)',
    borderRadius: '25px',
    borderWidth: '0px',
    transition: 'all .4s ease',
    MozTransition: 'all .4s ease',
    WebkitTransition: 'all .4s ease',
    OTransition: 'all .4s ease',
    textShadow: 'none',
    lineHeight: '1.5em',
    padding: '6px 18px'
};

const learnMore = props => {
    return (
        <Link style={LinkStyles} to={props.to}>
            Learn More
        </Link>
    );
};

export default learnMore;
