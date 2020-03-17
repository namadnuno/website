module.exports = {
  siteMetadata: {
    title: "Homeferences",
    description:
      "Homeferences are Conferences which happen virtually, so you can attend from your home.",
    url: "https://homeferences.netlify.com/",
    author: "@homeferences",
    image: `${__dirname}/src/images/homeferences.jpeg`,
    intro: "Conferences, but in your home.",
    menuLinks: [
      {
        name: "Homeferences",
        slug: "/",
      },
      {
        name: "About",
        slug: "/about/",
      },
    ],
    footerLinks: [
      {
        name: "GitHub",
        url: "https://github.com/homeferences/website",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/homeferences",
      },
    ],
  },
  plugins: [
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-theme-ui`,
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Homeferences`,
        short_name: `Homeferences`,
        background_color: `#f5f0eb`,
        theme_color: `#f5f0eb`,
        start_url: `/`,
        display: `standalone`,
        icon: `src/images/homeferences-icon.jpg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
