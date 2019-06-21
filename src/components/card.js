import React from 'react';
import {Link} from 'gatsby';
import styled from 'styled-components';

const card = props => {
    const buttonStyles = {
        fontSize: '1.25rem',
        lineHeight: '1.5rem',
        textAlign: 'center',
        verticalAlign: 'middle',
        display: 'inline-block',
        boxShadow: 'hsla(224, 62%, 24%, 0.26) 0 7px 42px',
        fontWeight: '400',
        borderRadius: '3px',
        padding: '1rem 2rem',
        border: '0',
        position: 'relative',
        color: '#ffffff',
        textDecoration: 'none',
        marginTop: '1rem',
        background: props.btnColor
    };

    const StyledCard = styled.div`
        transition: all 0.3s;
        &:hover {
            border-color: ${props => props.btnColor};
            cursor: pointer;
            background: #fafafa;
            box-shadow: rgba(23, 43, 99, 0.26) 0 7px 42px;
        }
    `;
    return (
        <StyledCard className="card w-100">
            <div className="card-body">
                <p className="font-weight-bold">{props.preHeading}</p>
                <h2 className="card-title">{props.heading}</h2>
                <p className="card-text">{props.description}</p>
                <Link to={props.link} style={buttonStyles}>
                    {props.buttonText}
                </Link>
            </div>
        </StyledCard>
    );
};

export default card;
