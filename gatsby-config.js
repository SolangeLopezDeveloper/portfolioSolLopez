module.exports = {
    siteMetadata: {
      title: "Mi sitio web de Gatsby",
      description: "Descripción de mi sitio web",
      author: "Mi nombre",
    },
    plugins: [
      "gatsby-plugin-image",
      "gatsby-plugin-sharp",
      
      {
        resolve: "gatsby-source-filesystem",
        options: {
          name: "images",
          path: `${__dirname}/public/images`,
        },
        __key: "images",
      },
    ],
  };