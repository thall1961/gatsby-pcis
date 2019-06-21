import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const capterra = () => {
    const data = useStaticQuery(graphql`
        query {
            cap: file(relativePath: {eq: "capterra.png"}) {
                sharp: childImageSharp {
                    fixed(width: 150) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    `);
    return (
        <div className="mx-auto text-center">
            <a href="https://www.capterra.com/p/166261/PCIS-Gold/#reviews">
                <Img fixed={data.cap.sharp.fixed} alt="Capterra Reviews" />
            </a>
        </div>
    );
};

export default capterra;
