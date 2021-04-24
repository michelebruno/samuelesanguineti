import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function SanBenedetto({data: {images}}) {

  return <Layout header={'The CJ'}>
    <Seo title={'The CJ'}/>
    <p>CJ is a project born from the union of great works of art, namely
      Christo's Floating Piers and Jacquemus fashion show in honor of the 10th
      anniversary of his fashion house. The brief called for the creation of a
      head covering inspired by a tiara or crown.
      The decision to create a tiara inspired by these two works of art was born
      from the idea of being able to combine two projects so similar and so
      important in a different accessory, where it could express the genius of
      these two artists.
    </p>
    <p>
      It is made with an internal structure of organic cardboard, and covered
      with orange and fuchsia faux leather, in the back instead there is a set
      of lavender flowers to take the naturalness of the two works of art.
    </p>
    <p><b>Role:</b> creation of an object, study and design of hat, creation of
      communication project, photographing subjects, creating styling,
      post-production of photos, image retouching, study of photography, fashion
      photography.
    </p>
    <p><b>Politecnico di Milano 2020</b></p>
    <div className="row project-gallery">
      <div className="col-12 col-md-6">
        <GatsbyImage
            image={getImage(images.nodes[0])}/>
      </div>
      <div className="col-12 col-md-6 position-relative ">
        <div className="row">

          <div
              style={{position: 'absolute', top: 30, right: 0, left: 0}}
              className="col">
            <GatsbyImage
                image={getImage(images.nodes[2])}/>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[3])}/>
      </div>
      <div className="col-12 col-md-8">
        <GatsbyImage
            image={getImage(images.nodes[4])}/>
      </div>

      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[5])}/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[6])}/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[7])}/>
      </div>
      <div className="col-12">
        <GatsbyImage
            image={getImage(images.nodes[8])}/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[9])}/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[1])}/>
      </div>
      <div className="col-12 col-md-4">
        <GatsbyImage
            image={getImage(images.nodes[10])}
            imgStyle={{transform: 'scaleX(-1)'}}
        />
      </div>

    </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/cj_(.*)/i"}}
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