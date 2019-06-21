import React from 'react';
import styled from 'styled-components';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const Blue = styled.div`
    background-color: #00bcd4;
    height: 500px;
`;

const fullWidthCTA = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "play-button.png"}) {
                sharp: childImageSharp {
                    fixed(width: 125) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `);
    return (
        <Blue className="row justify-content-center align-items-center py-5 my-5">
            <div className="d-flex flex-column justify-content-center">
                <div className="col-12 text-center">
                    <Link to="/">
                        <Img fixed={data.file.sharp.fixed} alt="Play movie" />
                    </Link>
                    <h1 className="text-center text-white">
                        Electronic Health Record
                    </h1>
                    <h2 className="text-center text-white lead">
                        Watch a 2-minute demo of PCIS GOLD's Electronic Health
                        Record (EHR).
                    </h2>
                </div>
            </div>
        </Blue>
    );
};

export default fullWidthCTA;
