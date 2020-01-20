require(`dotenv`).config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    siteTitle: `ducharm.dev`,
    siteTitleAlt: `ducharm.dev`,
    siteHeadline: `ducharm.dev`,
    siteImage: `/blue_sky.jpg`,
    navigation: [
      {
        title: `About`,
        slug: `/about`,
      },
      {
        title: `Blog`,
        slug: `/blog`,
      },
    ],
    externalLinks: [
      {
        name: `GitHub`,
        url: `https://github.com/mducharm`
      },
      {
        name: `LinkedIn`,
        url: `https://www.linkedin.com/in/mducharm/`
      },
      {
        name: `Twitter`,
        url: `https://twitter.com/ducharmdev`
      }
    ]
  },
  plugins: [
    {
      resolve: `@lekoarts/gatsby-theme-minimal-blog`,
      options: {},
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GOOGLE_ANALYTICS_ID,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `ducharm.dev`,
        short_name: `ducharm.dev`,
        description: `Personal site for Michael Ducharm.`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: `#6B46C1`,
        display: `standalone`,
        icons: [
          {
            src: `/android-chrome-192x192.png`,
            sizes: `192x192`,
            type: `image/png`,
          },
          {
            src: `/android-chrome-512x512.png`,
            sizes: `512x512`,
            type: `image/png`,
          },
        ],
      },
    },
    `gatsby-plugin-offline`,
    `gatsby-plugin-netlify`,
    // `gatsby-plugin-webpack-bundle-analyser-v2`,
  ],
}
