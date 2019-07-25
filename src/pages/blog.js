import React from 'react';
import {graphql, Link} from 'gatsby';

export default ({data}) => {
    return (
        <div className="container">
            <div className="row">
                {data.allSanityPost.edges.map(({node}) => (
                    <div key={node.id} className="col-md-5 m-2 p-3">
                        <Link to={`/blog/${node.slug.current}`}>
                            {node.title}
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const query = graphql`
    query {
        allSanityPost {
            edges {
                node {
                    id
                    title
                    slug {
                        current
                    }
                }
            }
        }
    }
`;
