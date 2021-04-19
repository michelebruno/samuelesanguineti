import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import SEO from '../components/SEO';

export default function SanBenedetto({data: {images}}) {
  return <Layout header={'Vetro'}>
    <SEO title={'Vetro'}/>
    <p>Vetro is a group project about the creation of a Digital Branding
      strategy for an invented brand. We were asked to focalize on the analysis
      of the last trends and to create something that reflects the needs of the
      target chosen. We focused on the trend of hand-crafting and the need for
      young people
      to gain real knowledge about hand-crafting. Vetro allows people to have an
      omnichannel experience. It has a monthly Magazine that gives to people the
      possibility to know more about artisans. It allows also to collaborate and
      learn from them organizing both online and live workshops inviting
      different guests from all over the world.
    </p>
    <p><b>Role:</b> Creation of illustrations, branding, creation of digital
      content.
    </p>
    <p><b>Politecnico di Milano 2020</b></p>
    <div className="row  justify-content-center project-gallery">
    </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/v_(.*)/i"}}
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