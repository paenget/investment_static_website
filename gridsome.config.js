// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "StrongView Investment Management",
  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "https://strongview.blog", // required
        apiBase: "wp-json",
        typeName: "WordPress",
        perPage: 100,
        concurrent: 10
      }
    },
    {
      use: "gridsome-plugin-gtm",
      options: {
        id: "GTM-KQKJ5VB",
        enabled: true,
        debug: true
      }
    }
  ],
  templates: {
    WordPressPost: "/:year/:month/:day/:slug"
  }
};
