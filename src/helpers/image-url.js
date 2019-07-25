import imageUrlBuilder from '@sanity/image-url';
// copied from pcisstudio project
const sanityConfig = {
    root: true,
    project: {
        name: 'PCIS_STUDIO'
    },
    api: {
        projectId: '2bek7rwq',
        dataset: 'production'
    },
    plugins: [
        '@sanity/base',
        '@sanity/components',
        '@sanity/default-layout',
        '@sanity/default-login',
        '@sanity/desk-tool'
    ],
    parts: [
        {
            name: 'part:@sanity/base/schema',
            path: './schemas/schema.js'
        }
    ]
};

const builder = imageUrlBuilder(sanityConfig.api);

export function imageUrlFor(source) {
    return builder.image(source);
}
