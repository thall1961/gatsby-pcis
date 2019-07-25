require('dotenv').config({path: `.env.${process.env.NODE_ENV}`});

module.exports = {
    plugins: [
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `img`,
                path: `${__dirname}/src/images`
            }
        },
        `gatsby-plugin-sharp`,
        `gatsby-transformer-sharp`,
        {
            resolve: 'gatsby-plugin-hubspot',
            options: {
                trackingCode: '4270513',
                // Setting this parameter is optional
                respectDNT: true
            }
        },
        `gatsby-plugin-styled-components`,
        {
            resolve: `gatsby-plugin-sass`,
            options: {
                implementation: require('sass')
            }
        },
        {
            resolve: 'gatsby-source-sanity',
            options: {
                projectId: '2bek7rwq',
                dataset: 'production'
                // a token with read permissions is required
                // if you have a private dataset
                // token: process.env.SANITY_READ_TOKEN
            }
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: {
                printRejected: true // Print removed selectors and processed file names
                // develop: true, // Enable while using `gatsby develop`
                // tailwind: true, // Enable tailwindcss support
                // whitelist: ['whitelist'], // Don't remove this selector
                // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
                // purgeOnly : ['components/', '/main.css', 'bootstrap/'], // Purge only these files/folders
            }
        },
        `gatsby-plugin-react-helmet`,
        // {
        //     resolve: 'gatsby-plugin-guess-js',
        //     options: {
        //         // Find the view id in the GA admin in a section labeled "views"
        //         GAViewID: `UA-39687018-1`,
        //         minimumThreshold: 0.03,
        //         // The "period" for fetching analytic data.
        //         period: {
        //             startDate: new Date('2018-1-1'),
        //             endDate: new Date()
        //         }
        //     }
        // },
        `gatsby-plugin-netlify`,
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: 'Patient Care Information Systems',
                short_name: 'PCIS',
                start_url: '/',
                background_color: '#ffffff',
                theme_color: '#001e2d',
                // Enables "Add to Homescreen" prompt and disables browser UI (including back button)
                // see https://developers.google.com/web/fundamentals/web-app-manifest/#display
                display: 'standalone',
                icon: 'src/images/icon.png' // This path is relative to the root of the site.
                // An optional attribute which provides support for CORS check.
                // If you do not provide a crossOrigin option, it will skip CORS for manifest.
                // Any invalid keyword or empty string defaults to `anonymous`
                //   crossOrigin: `use-credentials`,
            }
        },
        `gatsby-plugin-offline`,
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                // You can add multiple tracking ids and a pageview event will be fired for all of them.
                trackingIds: [
                    'UA-113002810-3' // Google Analytics / GA
                    // 'AW-CONVERSION_ID' // Google Ads / Adwords / AW
                    // 'DC-FLOODIGHT_ID' // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
                ],
                // This object gets passed directly to the gtag config command
                // This config will be shared accross all trackingIds
                // gtagConfig: {
                //     optimize_id: 'OPT_CONTAINER_ID',
                //     anonymize_ip: true,
                //     cookie_expires: 0
                // },
                // This object is used for configuration specific to this plugin
                pluginConfig: {
                    // Puts tracking script in the head instead of the body
                    head: false,
                    // Setting this parameter is also optional
                    respectDNT: true,
                    // Avoids sending pageview hits from custom paths
                    exclude: ['/preview/**', '/do-not-track/me/too/']
                }
            }
        }
    ]
};
