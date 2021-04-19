import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import SEO from '../components/SEO';

export default function SanBenedetto({data: {images}}) {
  return <Layout header={'Faith Connexion'}>
    <SEO title={'Faith Connexion'}/>
    <p>Faith connexion was my first photography job, done at NABA during my
      photography class. The job consisted of photographing for this e-commerce
      site. The concept of Faith Connexion is best described as multiple brands
      united under one roof.
    </p>
    <p>
      It was very inspiring to be able to create these shots in one's own home,
      it
      really helped me to take into account the spaces and light, trying to get
      shots that could reflect the brand. In this job there was the creation of
      outfits, study of positions, study of environments
    </p>
    <p><b>Role:</b>  photographing subjects, creating styling, post-production of photos, image retouching, study of photography, fashion photography.
    </p>
    <p><b>NABA 2018</b></p>
    <div className="row  justify-content-center project-gallery">

    </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/fc_(.*)/i"}}
      sort: {order: DESC, fields: relativePath}
    ) { 
      nodes {
        id
        relativePath
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
        publicURL
      } 
    } 
  }
`;