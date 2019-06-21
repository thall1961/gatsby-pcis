import {graphql} from 'gatsby';

export const fluidImage = graphql`
    fragment fluidImage on File {
        sharp: childImageSharp {
            fluid {
                ...GatsbyImageSharpFluid_withWebp
            }
        }
    }
`;
