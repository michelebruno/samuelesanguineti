import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function TheStripedShop({data: {images}}) {
  return <Layout header={'The Striped Shop'} next={'/sanbenedetto'}>
    <Seo title={'The Striped Shop'}/>
    <p>
      The Archetypical Innovation in Sportswear workshop focuses on the redesign
      of a vintage garment, its actualization in terms of design, material
      technologies and production processes. The whole experience considered
      each part of the design process, starting from the marketing strategy,
      passing through the design and engineering of the product, ending with a
      deep reflection regarding the communication of the sustainable features at
      different levels. The outcome had considered the garment development,
      tackling all the research/ production/ communication steps, with a strong
      focus on sustainability, innovative technologies and production
      feasibility.
    </p>
    <p><b>Role:</b> creation of communication content, branding, creation of a
      service, creation of customer journey, creation of app and web interface,
      study of an advertising campaign, study of trends, study of
      sustainability.
    </p>
    <p><b>Group members:</b> Anna Baroni, Veronica Busignani, Paola Mazza,
      Samuele Sanguineti, Matilde Voltolini
    </p>
    <p><b>Politecnico di Milano 2020</b></p>
    <p><b><a href="/samuelesanguineti_tesi_The Striped Shop.pdf">(ita)
      Bachelor’s Degree Thesis </a></b></p>
    <div className="row  justify-content-center project-gallery">
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[0])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[1])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[2])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[3])}/>
      </div>

      <div className="col-12 ">
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

      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[8])}/>
      </div>

      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[9])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[10])}/>
      </div>

      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[11])}/>
      </div>

      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[12])}/>
      </div>

      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[13])}/>
      </div>
      <div className="col-12">
        <img src={images.nodes[14].publicURL}
             alt="" className="img-fluid"/>

      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[16])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[17])}/>
      </div>
    </div>
  </Layout>;
}

export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/str_(.*)/i"}}
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