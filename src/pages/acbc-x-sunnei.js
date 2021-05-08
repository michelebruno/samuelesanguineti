import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import Seo from '../components/Seo';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

export default function SanBenedetto({data: {images}}) {

  return <Layout header={'ACBCxSUNNEI'}>
    <Seo title={'ACBCxSUNNEI'}/>
    <p>The Archetypical Innovation in Sportswear workshop focuses on the
      redesign of a vintage garment, its actualization in terms of design,
      material technologies and production processes. The whole experience
      considered each part of the design process, starting from the marketing
      strategy, passing through the design and engineering of the product,
      ending with a deep reflection regarding the communication of the
      sustainable features at different levels. The outcome had considered the
      garment development, tackling all the research/ production/ communication
      steps, with a strong focus on sustainability, innovative technologies and
      production feasibility.
    </p>
    <p><b>Role:</b> creation of communication content, branding, creation of a
      service, creation of customer journey, creation of app and web interface,
      study of an advertising campaign, study of trends, study of
      sustainability.
    </p>
    <p><b>Group members:</b> Anna Baroni, Veronica Busignani, Paola Mazza, Samuele Sanguineti, Matilde Voltolini
    </p>
    <p><b>Politecnico di Milano 2020</b></p>
    <div className="row project-gallery">
      <div className="col-12 col-lg-11">
        <GatsbyImage alt={''} image={getImage(images.nodes[0])}/>
      </div>
      <div className="col-12 col-md-6"><GatsbyImage alt={''} image={getImage(
          images.nodes[1])}/></div>
      <div className="col-12 col-md-6">
        <GatsbyImage alt={''} image={getImage(images.nodes[2])}/>
        <GatsbyImage alt={''} image={getImage(images.nodes[3])}/>
      </div>
      <div className="col-12">
        <GatsbyImage alt={''} image={getImage(images.nodes[4])}/>
      </div>
      <div className="col-12">
        <GatsbyImage alt={''} image={getImage(images.nodes[5])}/>
      </div>
      <div className="col-12">
        <GatsbyImage alt={''} image={getImage(images.nodes[6])}/>
      </div>
      <div className="col-12">
        <GatsbyImage alt={''} image={getImage(images.nodes[7])}/>
      </div>
      <div className="col-12">
        <GatsbyImage alt={''} image={getImage(images.nodes[8])}/>
      </div>
    </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/su_(.*)/i"}}
      sort: {order: ASC, fields: relativePath}
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