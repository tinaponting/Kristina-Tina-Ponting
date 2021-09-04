/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Kristina Ponting | Blogger`,
    author: `Baran Cezayirli`,
    description: `Ordkonstnär i hjärtat av Blekinge, skriver om livet som gym tant och om vad som strålar in huvudet för tillfället..`,
    siteUrl: `https://barancezayirli.com/`,
    social: {
      twitter: `KristinaPonting`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Kristina Ponting | Blogger`,
        short_name: `CV`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#38B2AC`,
        display: `standalone`,
        icon: 'src/assets/site-icon.png'
      },
    },
    'gatsby-plugin-offline',
    'gatsby-transformer-json',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
    'gatsby-plugin-netlify-cms',
    `gatsby-plugin-postcss`,
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: true,
        tailwind: true, // Enable tailwindcss support
      }
    }
  ],
};
