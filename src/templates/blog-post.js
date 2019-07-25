import React from 'react';
import {graphql} from 'gatsby';

export const query = graphql`
    query($slug: String) {
        sanityPost(slug: {current: {eq: $slug}}) {
            title
            _createdAt
            _updatedAt
            _rawBody
        }
    }
`;

export default ({data}) => {
    return (
        <div>
            <h3>{data.post.title}</h3>
            <p>{data.post._updatedAt}</p>
        </div>
    );
};
