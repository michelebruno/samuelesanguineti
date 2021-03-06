import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function SanBenedetto({data: {images}}) {
   return <Layout header={'Golfo del Tigullio'} next={"/faithconnexion/"}>
     <Seo title={"Golfo del Tigullio"}/>
    <p>
      In the project of my three-year thesis I wanted to include all my path that I did at NABA. This is a path to create a brand for tourism in the Golfo of Tigullio, where I was born and where I can return every summer. It is a project born from the desire to be able to provide a well-organized and detailed plan for tourism for every type of need.
      In it is enclosed every possibility to enjoy the beauty of this place, organized through "packages" that provide various modes of vacation, this subdivision is also by area in which you want to reside, with every type of need and desire with the possibility of being able to create even to your measure, according to your needs, then with the addition of being able to modify already existing ones. With the development of an app from a visual point of view, with the possibility of speeding up the process of choosing and modifying packages, with the intention of having a more intuitive and functional vision.

    </p>
    <p><b>Role:</b> Branding, creating an effective communication plan, project organization, organizing a new entity with the possibility of publication.</p>
    <p><b>NABA 2018</b></p>
    <p><b><a href="/samuelesanguineti_tesi_Golfo del Tigullio.pdf">(ita) Bachelor’s Degree Thesis </a></b></p>
    <div className="row  justify-content-center project-gallery">
      <div className="col-12 col-md-4">
        <GatsbyImage
          image={getImage(images.nodes[5])}/>
      </div>
      <div className="w-100"></div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[14])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[13])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[12])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[11])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[7])}/>
      </div>
      <div className="col-12 col-md-6">
        <GatsbyImage
          image={getImage(images.nodes[6])}/>
      </div>
      <div className="w-100"></div>
      <div className="col-4">
        <img src={images.nodes[2].publicURL} alt="" className="img-fluid"/>
      </div>
      <div className="col-4">
        <img src={images.nodes[0].publicURL} alt="" className="img-fluid"/>
      </div>
      <div className="col-4">
        <img src={images.nodes[1].publicURL} alt="" className="img-fluid"/>
      </div>
      <div className="col-8">
        <GatsbyImage
            image={getImage(images.nodes[8])}/>
      </div>
      <div className="col-4">
        <GatsbyImage
            image={getImage(images.nodes[10])}  className={"h-100"}  />
      </div>
      <div className="col-12 col-md-8 offset-md-4">
        <GatsbyImage
            image={getImage(images.nodes[9])}/>
      </div>
    </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/gdt_(.*)/i"}}
      sort: {order: DESC, fields: relativePath}
    ) { 
      nodes {
        id
        relativePath
        childImageSharp {
          gatsbyImageData(layout: CONSTRAINED)
        }
        publicURL
      } 
    }
  }
`;