import React from 'react';
import {graphql} from 'gatsby';
import Img from 'gatsby-image';
import Header from '../components/header';
import PillarHero from '../components/pillarHero';
import AnimatedFeature from '../components/animatedFeatures';
import Benefits from '../components/benefits';
import FullWidthCTA from '../components/fullWidthCTA';
import ThreeFeatures from '../components/threeFeatures';
import Footer from '../components/footer';

export const query = graphql`
    query {
        file(relativePath: {eq: "Keusler.png"}) {
            sharp: childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }
`;

const ehr = ({data}) => {
    return (
        <div>
            <Header />
            <PillarHero
                heading="Electronic Health Record"
                subheading="Save time, eliminate excess paperwork, and keep physicians happy all at once."
                className="my-5 py-5"
                fileName="Keusler.png"
            >
                <Img fluid={data.file.sharp.fluid} alt="" />
            </PillarHero>
            <div className="my-5 py-5">
                <AnimatedFeature />
            </div>
            <Benefits />
            <FullWidthCTA />
            <h2 className="text-center my-5">Features at a Glance</h2>
            <ThreeFeatures />
            <ThreeFeatures />
            <ThreeFeatures />
            <ThreeFeatures />
            <ThreeFeatures />
            <ThreeFeatures />
            <Footer />
        </div>
    );
};

export default ehr;
