module.exports = {
    siteMetadata: {
        title: 'Samuele Sanguineti',
        description:
            'My name is Samuele, and I am attending a Master degree in Design for the Fashion System at Politecnico di Milano.',
        author: 'Michele Bruno',
        siteUrl: 'https://samuelesanguineti.com'
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
        'gatsby-plugin-sitemap',

    ]
}