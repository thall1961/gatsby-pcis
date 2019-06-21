import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import styled, {keyframes} from 'styled-components';
import Img from 'gatsby-image';

const rotating = keyframes`
    from {transform: rotate(0deg);}
    to {transform: rotate(360deg);}
`;

const Products = styled.div`
    &:after {
        -webkit-animation-name: ${rotating};
        animation-name: ${rotating};
        -webkit-animation-iteration-count: infinite;
        animation-iteration-count: infinite;
        -webkit-animation-duration: 8s;
        animation-duration: 8s;
        -webkit-animation-timing-function: linear;
        animation-timing-function: linear;
        background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2MDAgNjAwIj4KICA8Y2lyY2xlIGN4PSIzMDAiIGN5PSIzMDAiIHI9IjIxNiIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRUZFRkVGIiBzdHJva2Utd2lkdGg9IjEuNSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjExLjIgNS42Ii8%2BCiAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMzAwIiByPSIxNDIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI0U3RTdFNyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWRhc2hhcnJheT0iMTIgNiIvPgogIDxjaXJjbGUgY3g9IjMwMCIgY3k9IjMwMCIgcj0iMjkyIiBmaWxsPSJub25lIiBzdHJva2U9IiNGMkYyRjIiIHN0cm9rZS1taXRlcmxpbWl0PSIxMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIi8%2BCiAgPGNpcmNsZSBjeD0iMzAwIiBjeT0iMzAwIiByPSI3OCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjRTdFN0U3IiBzdHJva2Utd2lkdGg9IjEuMSIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1kYXNoYXJyYXk9IjYuNiAzLjMiLz4KPC9zdmc%2BCg%3D%3D)
            no-repeat 50% 50%;
        background-size: 400px;
        position: absolute;
        width: 210px;
        height: 210px;
        left: 50%;
        top: 50%;
        margin-left: -105px;
        margin-top: -105px;
        content: '';
        display: block;
        z-index: -1;
        @media (min-width: 768px) {
            width: 400px;
            height: 400px;
            margin-left: -200px;
            margin-top: -200px;
        }
    }
`;

const animatedFeatures = () => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "blue-logo.png"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);
    return (
        <div>
            <h2 className="h3 text-center font-weight-bold">
                The PCIS GOLD Experience
            </h2>
            <Products className="container px-5 position-relative mt-5">
                <div className="row justify-content-between align-items-center">
                    <div className="col-12 col-md-4">
                        <h3 className="text-right h5 text-primary">
                            Happy Clinicians
                        </h3>
                        <p className="text-right">
                            Physicians and nurses will spend less time on the
                            computer and more time with your patients by using
                            our customized healthcare plan macros.
                        </p>
                        <h3 className="text-right mt-5 h5 text-primary">
                            Engaged Patients
                        </h3>
                        <p className="text-right">
                            Provide instant access to healthcare records,
                            patient education, appointment requests,
                            e-Statements, lab and test results, and secure
                            messaging via a web portal or mobile app.
                        </p>
                    </div>
                    <div className="col-md-3 d-none d-md-block">
                        <Img fluid={data.file.sharp.fluid} alt="PCIS" />
                    </div>
                    <div className="col-12 col-md-4">
                        <h3 className="text-left h5 text-primary">
                            Clinic Success
                        </h3>
                        <p className="text-left">
                            Our clients achieve 100% physician adoption because
                            our software works for them. Our team will be there
                            100% of the time to help you thrive and profit.
                        </p>
                        <h3 className="text-left h5 mt-5 text-primary">
                            Designed by You
                        </h3>
                        <p className="text-left">
                            Don't fit into their box. Design our software around
                            the way you practice. Customize your EHR experience
                            to your specialties and your needs.
                        </p>
                    </div>
                </div>
            </Products>
        </div>
    );
};

export default animatedFeatures;
