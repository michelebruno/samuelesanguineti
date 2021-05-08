import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function SanBenedetto({data: {images}}) {

  return <Layout header={'Faith Connexion'} next={"/thestripedshop/"}>
    <Seo title={'Faith Connexion'}/>
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
    <p><b>Role:</b> photographing subjects, creating styling, post-production of
      photos, image retouching, study of photography, fashion photography.
    </p>
    <p><b>NABA 2018</b></p>
    <div className="row project-gallery" id="fc-pics-container">
      <div id="fc1">
        <GatsbyImage image={getImage(images.nodes[6])}/>
      </div>
      <div id="fc2">
        <GatsbyImage image={getImage(images.nodes[5])}/>
      </div>
      <div id="fc3">
        <GatsbyImage image={getImage(images.nodes[4])}/>

        <div className={"position-relative"}>

          <div id="fc4">
            <GatsbyImage
                image={getImage(images.nodes[3])}/>
          </div>
          <div id="fc5">
            <GatsbyImage image={getImage(images.nodes[2])}/>
          </div>
        </div>
      </div>


    </div>
    <div className="project-gallery">
      <div className="row ">
        <div className="col-12">
          <GatsbyImage image={getImage(images.nodes[1])}/>
        </div>
        <div className="col-12">
          <GatsbyImage image={getImage(images.nodes[0])}/>
        </div>
      </div>
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
          gatsbyImageData(
            layout: FULL_WIDTH
            quality: 100
          )
        }
        publicURL
      } 
    } 
  }
`;