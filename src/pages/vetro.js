import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Seo from '../components/Seo';

export default function SanBenedetto({data: {images}}) {
   return <Layout header={'Vetro'} next={"/acbc-x-sunnei/"}>
    <Seo title={'Vetro'}/>
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
    <div className="row project-gallery no-gutters">
      <div className="col-6 mx-auto">
        <GatsbyImage image={getImage(images.nodes[0])}></GatsbyImage>
      </div>
      <div className="col-12">
        <GatsbyImage alt={""} image={getImage(images.nodes[1]) }/>
      </div>
      <div className="w-100"></div>
    </div>
    <div className="row project-gallery no-gutters">
      <div className="col-12">
        <h3 className={"h6 font-weight-bold"}>BRAND AWARENESS <br/>
          TEASING</h3>
      </div>
      <div className="col-5">
        <GatsbyImage image={getImage(images.nodes[2])}></GatsbyImage>
      </div>
      <div className="col-7">
        <GatsbyImage image={getImage(images.nodes[4])}></GatsbyImage>
      </div>
    </div>
    <div className="row project-gallery ">
      <div className="col-12">
        <h3 className={"h6 font-weight-bold"}>BRAND DISCOVERY <br/>
          WORKSHOP POSTER</h3>
      </div>
      <div className="col-12">
        <GatsbyImage image={getImage(images.nodes[6])}></GatsbyImage>
      </div>
      <div className="col-6 pt-0">
        <video autoPlay className={"w-50 mx-auto d-block"} muted>
          <source src={images.nodes[10].publicURL} />
        </video>
      </div>
      <div className="col-6 align-self-center pt-0">
        <video autoPlay className={"w-100 mx-auto d-block"} muted>
          <source src={images.nodes[11].publicURL} />
        </video>
      </div>
    </div>
     <div className="row project-gallery ">
       <div className="col-12">
         <h3 className={"h6 font-weight-bold"}>PURCHASE EXPERIENCE<br/>
           MAGAZINE AND WORKSHOP</h3>
       </div>
       <div className="col-6">
         <GatsbyImage image={getImage(images.nodes[3])}></GatsbyImage>
       </div>
       <div className="col-6">
         <GatsbyImage image={getImage(images.nodes[5])}></GatsbyImage>
       </div>
     </div>
     <div className="row project-gallery ">
       <div className="col-12">
         <h3 className={"h6 font-weight-bold"}>POST PURCHASE<br/>
           INSTAGRAM STORIES</h3>
       </div>
       <div className="col-12">
         <GatsbyImage image={getImage(images.nodes[12])}></GatsbyImage>
       </div>
     </div>
  </Layout>;
}
export const query = graphql`{
    images: allFile(
      filter: {relativePath: {regex: "/ve_(.*)/i"}}
      sort: {order: ASC, fields: relativePath}
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