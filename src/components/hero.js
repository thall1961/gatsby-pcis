import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import Img from 'gatsby-image';
import BackgroundImage from 'gatsby-background-image';
import {QuoteContainer, QuoteBox} from './component-styles/quoteStyles';

const hero = () => {
    const data = useStaticQuery(graphql`
        query {
            bkg: file(relativePath: {eq: "blobs.png"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cook: file(relativePath: {eq: "thomascook.png"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            galen: file(relativePath: {eq: "galen.png"}) {
                sharp: childImageSharp {
                    fixed(width: 160) {
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
                overflowX: 'hidden'
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

export default hero;
