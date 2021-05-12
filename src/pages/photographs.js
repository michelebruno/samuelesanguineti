import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import Seo from '../components/Seo';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';

export default function SanBenedetto({data: {images, debugged}}) {

  return <Layout header={'Personal photo'}>
    <Seo title={'Personal photo'}/>
    <div className="row project-gallery">
      <div
          className="col-12 offset-lg-2 col-lg-3 d-flex flex-column justify-content-between">
        <GatsbyImage alt={''} image={getImage(images.nodes[0])}/>
        <GatsbyImage alt={''} image={getImage(debugged)}/>
      </div>
      <div className="col-12 col-lg-6 h-100">
        <GatsbyImage alt={''} image={getImage(images.nodes[2])}/>
      </div>
    </div>
    <div className="row project-gallery">
      <div className="col-12 offset-lg-2 col-lg-3">
        <GatsbyImage alt={''} image={getImage(images.nodes[3])}/>
      </div>
      <div className="col-12 col-lg-2 align-self-end">
        <GatsbyImage alt={''} image={getImage(images.nodes[4])}/>
      </div>
      <div className="col-12 col-lg-2 align-self-end">
        <GatsbyImage alt={''} image={getImage(images.nodes[5])}/>
      </div>
      <div className="col-12 col-lg-2 align-self-end">
        <GatsbyImage alt={''} image={getImage(images.nodes[6])}/>
      </div>
      <div
          className="col-12 offset-lg-2 col-lg-3 d-flex flex-column justify-content-between">
        <GatsbyImage alt={''} image={getImage(images.nodes[7])}/>
        <GatsbyImage alt={''} image={getImage(images.nodes[8])}/>
      </div>
      <div className="col-12 col-lg-6">
        <GatsbyImage alt={''} image={getImage(images.nodes[9])}/>
      </div>
      <div
          className="col-12 offset-lg-2 col-lg-3 d-flex flex-column justify-content-between">
        <GatsbyImage alt={''} image={getImage(images.nodes[10])}/>

      </div>
      <div className="col-12 col-lg-2 align-self-end">
        <GatsbyImage alt={''} image={getImage(images.nodes[11])}/>
      </div>
      <div className="col-12 col-lg-2 align-self-end">
        <GatsbyImage alt={''} image={getImage(images.nodes[12])}/>
      </div>
      <div className="col-12 col-lg-2 align-self-end">
        <GatsbyImage alt={''} image={getImage(images.nodes[13])}/>
      </div>
    </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(
        filter: {relativePath: {regex: "/samuelesanguineti_(.*)/i"}}
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
    debugged: file(
        relativePath: {eq: "samuelesanguineti_02.jpeg"}
    ) {
        id
        relativePath
        childImageSharp {
            gatsbyImageData(
                layout: FULL_WIDTH
                quality: 100
                transformOptions: {
                    rotate: 90
                    fit: CONTAIN
                    trim: 1
                }
            )
        }
        publicURL
    }
}
`;