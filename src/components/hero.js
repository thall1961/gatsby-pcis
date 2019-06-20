import React from 'react';
import styled from 'styled-components';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';

const QuoteContainer = styled.div`
    max-width: 67.666667%;
`;

const QuoteBox = styled.div`
    position: static;
    @media (min-width: 1600px) {
        position: absolute;
        top: 4rem;
        left: -5rem;
        width: 350px;
    }
    h2 {
        font-size: 1rem;
        padding: 0.5rem;
        line-height: 1.5;
        font-weight: 400;
        &:before {
            content: '“';
            font-family: 'Georgia', serif;
            font-size: 7rem;
            position: absolute;
            color: #2196f3;
            top: -1px;
            left: 5px;
        }
        @media (min-width: 768px) {
            font-size: 1.5rem;
            padding: 3rem 2rem 0.5rem 2rem;
            line-height: 1.5;
            font-weight: 400;
        }
        @media (min-width: 1600px) {
            padding: 3rem 2rem 0.5rem 2rem;
            line-height: 1.5;
            font-weight: 400;
        }
    }
    p {
        padding: 0rem 2rem 0.5rem 2rem;
        font-weight: 300;
    }
`;

const hero = () => {
    const data = useStaticQuery(graphql`
        query {
            bkg: file(relativePath: {eq: "blobs.png"}) {
                ...fluidImage
            }
            cook: file(relativePath: {eq: "thomascook.png"}) {
                ...fluidImage
            }
            galen: file(relativePath: {eq: "galen.png"}) {
                sharp: childImageSharp {
                    fixed(width: 200) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `);
    return (
        <BackgroundImage
            fluid={data.bkg.sharp.fluid}
            style={{
                width: '100%',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                overflowX: 'hidden',
                minHeight: '800px'
            }}
        >
            <div className="row justify-content-center my-5 py-5">
                <div className="col-12 col-md-6">
                    <h1 className="font-weight-light text-center">
                        PCIS GOLD is a managed EHR software built for
                        independent medical groups.
                    </h1>
                    <div className="mt-5 text-center">
                        <button className="btn btn-primary btn-lg">
                            Schedule a Demo
                        </button>
                        <br className="d-block d-lg-none" />
                        <span className="ml-3">Talk with a sales rep</span>
                    </div>
                    <QuoteContainer className="mx-auto position-relative pt-4">
                        <Img fluid={data.cook.sharp.fluid} alt="" />
                        <QuoteBox className="bg-white p-3 text-center shadow">
                            <h2 className="font-italic quote">
                                I honestly believe that we made the right
                                decision by going with PCIS.
                            </h2>
                            <p className="quote-name">Thomas Cook, M.D. FACP</p>
                            <Img
                                fixed={data.galen.sharp.fixed}
                                alt=""
                                width="50%"
                            />
                        </QuoteBox>
                    </QuoteContainer>
                </div>
            </div>
        </BackgroundImage>
    );
};

export const fluidImage = graphql`
    fragment fluidImage on File {
        sharp: childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`;

export default hero;
