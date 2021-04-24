import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function SanBenedetto({data: {images}}) {
  return <Layout header={'Thé San Benedetto'}>
    <Seo title={"Thé San Benedetto"}/>

    <p>
      In the San Benedetto project, is enclosed all the work behind the creation
      of tea. Through illustrations created specifically for each taste, trying
      to create a macro environment, growth, which is divided into two branches,
      one for the growth of the ingredients to be able to create the tea and the
      second personal growth within the environment where you are a child, where
      you grow. Through the light that meets the branches and leaves and creates
      incredibly comforting plays of light and also in the home environment the
      reflections of light created by the sun passing through the windows. He
      was inspired by the photographs created by Nima Benati for Dolce&Gabbana's
      campaign, in the lemon houses of Salento, where the interplay between
      sunlight and nature can be seen to perfection.
    </p>
    <p><b>Role:</b> Creation of illustrations, branding, creation of digital
      content.</p>
    <p><b>NABA 2018</b></p>
    <div className="row project-gallery">
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[7])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[6])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[4])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[5])}/>
      </div>
      <div className="w-100"></div>
      <div className="col-12">
        <GatsbyImage
            image={getImage(images.nodes[0])}/>
      </div>
    </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(filter: {relativePath: {regex: "/sb_(.*)/i"}}) { 
      nodes {
        id
        relativePath
        childImageSharp {
          gatsbyImageData( 
            layout: FULL_WIDTH
          )
        }
      } 
    }
  }
`;