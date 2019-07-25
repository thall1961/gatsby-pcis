const path = require('path');

module.exports = async ({graphql, actions}) => {
    const result = await graphql(`
        {
            allSanityPost {
                edges {
                    node {
                        slug {
                            current
                        }
                    }
                }
            }
        }
    `);

    if (result.errors) {
        throw result.errors;
    }

    const posts = result.allSanityPost.edges.map(({node}) => node);

    posts.forEach(edge => {
        actions.createPage({
            path: `/blog/${edge.slug.current}`,
            component: path.resolve('./src/templates/blog-post.js'),
            context: {slug: edge.slug.current}
        });
    });
};
