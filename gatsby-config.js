/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

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
            resolve: `gatsby-plugin-google-analytics`,
            options: {
                trackingId: 'UA-113002810-3'
            }
        }
    ]
};
