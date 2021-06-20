import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function TheStripedShop({data: {images}}) {
  return <Layout header={'The Striped Shop'} next={'/sanbenedetto'}>
    <Seo title={'The Striped Shop'}/>
    <p>
      The Striped Shop is an itinerant pop-up store focused on lifestyle
      necessities and inspired by the iconic Breton shirt, featuring all its
      lovers’ needs. Its essence is deeply connected with the theme of the
      journey; starting from finding it, a special treasure hunt organized to
      celebrate the opening, will guide you through hints scattered around the
      city to the actual shop where the exploration doesn’t simply ends but
      turns into an out of the world experience. Your trip continues thanks to
      our surreal VR experiences and a magic courtyard waiting for you to step
      in.
    </p>
    <p><b>Role:</b> Creation of a brand, creation of a retail-store, study of communication, study of the creation of a retail, how the retail world works, 3d modeling, creation of textures, creation of collages, moodboards, study of personas.
    </p>
    <p><b>Group members:</b> Anna Biganzoli, Beatrice Ferrario, Valeria Forleo, Samuele Sanguineti, Gaia Vittoria Milanese.
    </p>
    <p><b>Pubblications:</b> <a href="https://www.instagram.com/p/CMb5_z3sg3w/">https://www.instagram.com/p/CMb5_z3sg3w/</a>
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
                    layout: CONSTRAINED
                    quality: 100
                )
            }
            publicURL
        }
    }
}
`;