import React from 'react';
import styled from 'styled-components';
import {Link, useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';

const CenterRight = styled.div`
    text-align: center !important;

    @media (min-width: 768px) {
        text-align: right !important;
    }
`;

const CenterLeft = styled.div`
    text-align: center !important;

    @media (min-width: 768px) {
        text-align: left !important;
    }
`;

const footer = () => {
    const data = useStaticQuery(graphql`
        query {
            onc: file(relativePath: {regex: "/ONC Certified 2015 Seal.png/"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            mgma: file(
                relativePath: {
                    regex: "/MGMA Corporate Member Logo - lores.png/"
                }
            ) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            sure: file(
                relativePath: {regex: "/SureScripts Provider Seal.png/"}
            ) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            logo: file(relativePath: {eq: "pcis-logo.png"}) {
                sharp: childImageSharp {
                    fixed(width: 150) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
            drum: file(
                relativePath: {
                    regex: "/DG_CertBadge_ONCHealthIT_2015_Large.png/"
                }
            ) {
                sharp: childImageSharp {
                    fixed(width: 75) {
                        ...GatsbyImageSharpFixed_withWebp
                    }
                }
            }
        }
    `);
    return (
        <footer className="py-3 py-md-5 border-top border-light">
            <div className="container border-bottom border-light">
                <div className="row justify-content-center align-items-center py-3 col-12 col-md-6 mx-auto">
                    <CenterLeft className="col-12 col-md-4">
                        <Img
                            fluid={data.onc.sharp.fluid}
                            alt="ONC Certified 2015 Seal"
                        />
                    </CenterLeft>
                    <div className="col-12 col-md-4 text-center-sm">
                        <Img
                            fluid={data.mgma.sharp.fluid}
                            alt="MGMA Corporate Member Logo"
                        />
                    </div>
                    <CenterLeft className="col-12 col-md-4">
                        <Img
                            fluid={data.sure.sharp.fluid}
                            alt="SureScripts Provider Seal"
                        />
                    </CenterLeft>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-between align-items-center py-3">
                    <CenterLeft className="col-12 col-md-4 row">
                        <Img fixed={data.logo.sharp.fixed} alt="PCIS Gold" />
                    </CenterLeft>
                    <div className="col-12 col-md-4 text-center">
                        <small>
                            Copyright © 2017 PCIS GOLD. All rights reserved.
                        </small>
                        <br />
                        <Link to="/privacy-policy">Privacy Policy</Link>
                    </div>
                    <CenterRight className="col-12 col-md-4 d-flex align-items-center justify-content-end">
                        <Img
                            fixed={data.drum.sharp.fixed}
                            alt="Drummond Certified Badge"
                        />
                        <Link to="/cost-and-limitations" className="ml-1">
                            PCIS Cost &amp; Limitations
                        </Link>
                    </CenterRight>
                </div>
            </div>
        </footer>
    );
};

export default footer;
