import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import LearnMore from './ctas/learnMore';

const benefits = () => {
    const data = useStaticQuery(graphql`
        query {
            drum: file(
                relativePath: {
                    regex: "/DG_CertBadge_ONCHealthIT_2015_Large.png/"
                }
            ) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            cap: file(relativePath: {eq: "capterra-round.png"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
            screens: file(relativePath: {eq: "screens.png"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-3 my-5">
                    <hr />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-md-6 mt-5">
                    <div className="row justify-content-center">
                        <div className="col-12">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <Img
                                        fluid={data.drum.sharp.fluid}
                                        alt="Drummond Certified Badge"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <p>
                                        Create an individualized charting
                                        experience with traditional or
                                        form-based charts built by your
                                        physicians. Spend more time with
                                        patients and less time on a computer
                                        using one-click charting via
                                        custom-built healthcare plan macros.
                                    </p>
                                    <div className="mt-3">
                                        <LearnMore to="/" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <div className="row align-items-center">
                                <div className="col-md-4">
                                    <Img
                                        fluid={data.cap.sharp.fluid}
                                        alt="See our Capterra Reviews"
                                    />
                                </div>
                                <div className="col-md-8">
                                    <p>
                                        Happy doctors and nurses help their
                                        patients live healthier, happier lives.
                                        Our goal as a software partner is to
                                        enable all our users to efficiently do
                                        their jobs and provide the highest level
                                        of care.
                                    </p>
                                    <div className="mt-3">
                                        <LearnMore to="/" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 mt-3">
                            <hr />
                            <p>
                                Let us show you how enjoyable it is to write
                                notes and prescriptions, chart, do code
                                encounters, and manage patients in our fully
                                integrated, managed EHR.
                            </p>
                            <div className="mt-3">
                                <LearnMore to="/" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-6 mt-5 text-center">
                    <Img
                        fluid={data.screens.sharp.fluid}
                        alt="We have great screens"
                    />
                </div>
            </div>
        </div>
    );
};

export default benefits;
