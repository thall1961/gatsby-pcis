import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import {useStaticQuery, graphql} from 'gatsby';
import ScheduleDemo from './ctas/scheduleDemo';
import {QuoteContainer} from '../components/component-styles/quoteStyles';
import Quote from '../components/quote';

const pillarHero = props => {
    const data = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "blobs.png"}) {
                sharp: childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid_withWebp
                    }
                }
            }
        }
    `);
    return (
        <BackgroundImage
            fluid={data.file.sharp.fluid}
            style={{
                width: '100%',
                backgroundSize: '100%',
                backgroundRepeat: 'no-repeat',
                overflowX: 'hidden'
            }}
        >
            <div className="row justify-content-center my-5">
                <div className="col-12 col-md-6">
                    <h1 className="text-center">{props.heading}</h1>
                    <h2 className="text-center lead">{props.subheading}</h2>
                    <div className="mt-5 text-center">
                        <ScheduleDemo />
                    </div>
                </div>
            </div>
            <div className="container">
                <QuoteContainer>
                    {props.children}
                    <Quote
                        quote="The sky's the limit with the PCIS GOLD EHR. It is going to be"
                        name="Dr. Melissa Keusler, OD - Keusler"
                    />
                </QuoteContainer>
            </div>
        </BackgroundImage>
    );
};

export default pillarHero;
