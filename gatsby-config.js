module.exports = {
    siteMetadata: {
      title: "Mi sitio web de Gatsby",
      description: "Descripción de mi sitio web",
      author: "Mi nombre",
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      "gatsby-plugin-dark-mode",
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: "./src/images/",
        },
        __key: "images",
      },
    ],
  };