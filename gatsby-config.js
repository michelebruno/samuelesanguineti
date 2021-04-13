module.exports = {
    pathPrefix: 'samuelesanguineti',
    siteMetadata: {
        title: 'Samuele Sanguineti__Portfolio',
        description:
            'My name is Samuele, and I am attending a Master degree in Design for the Fashion System at Politecnico di Milano.',
        author: 'Michele Bruno',
    },
    plugins: [
        'gatsby-plugin-sass',
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`,
            },
        },
        'gatsby-plugin-image',
        'gatsby-plugin-sharp',
        'gatsby-transformer-sharp',
    ]
}