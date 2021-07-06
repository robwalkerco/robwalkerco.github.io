module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "Rob Walker",
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `roboto\:400,700`
        ],
        display: 'auto'
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Rob Walker',
        short_name: 'Rob Walker',
        start_url: '/',
        background_color: '#f7f0eb',
        theme_color: '#2c6aa7',
        display: 'standalone',
        icon: 'src/images/robwalker.png',
      },
    }
  ],
};
