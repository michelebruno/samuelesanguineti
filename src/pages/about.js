import React from 'react';
import Layout from '../components/Layout';
import {graphql} from 'gatsby';
import {GatsbyImage, getImage} from 'gatsby-plugin-image';
import Link from 'gatsby-link';

export default function Home({data: {profile}}) {

  return <Layout
      header={<h1 className={'h3'} style={{lineHeight: 1}}>Hi, my name is<br/>Samuele
        Sanguineti</h1>}>
    <div className="row">
      <div className="col-12 col-lg-8 border-top border-dark ">
        <p className={' pt-4'}>I was born and raised in a town called
          Rapallo, that overlooks the Ligurian Sea to which I own a lot of my
          personal growth.
          After graduating as an graphic design, I decided to deepen my course
          of study following my great passion for graphics at NABA in Milan
          where I got my first <b>degree in Graphic Design and Art Direction</b>.
          I was
          then attracted by the communication and graphics that focused on
          fashion design, so I continued my course of study enrolling in a
          Master’s in <b>Design for the Fashion System at Politecnico di
            Milano</b>,
          which I am currently attending.
          I have always found interesting the link that stands between
          communication and fashion; I am firmly convinced that one could not
          exist without the other. This is why I wish that one day, the
          combination of fashion and communication, could became what my job
          will be based on.
        </p>
        <h2 className={'h5'}>Education</h2>
        <ul className="list-unstyled">
          <li><b>Master Degree</b>, Design for the Fashion System, Politecnico
            di Milano, 2019
          </li>
          <li><b>Bachelor Degree</b>, Graphic desing e art direction, NABA, 2018
          </li>
          <li><b>Diploma</b>, technical Institute, Graphic design 2010-2015</li>
        </ul>

      </div>
      <div className="col-12 col-lg-4 border-dark border-left " >
        <p className={'small'}>Milano / Italia <br/>
          for information and collaboration:<br/>
          <a className="font-weight-bold"
             href="mailto:samuele.sanguineti96@gmail.com">samuele.sanguineti96@gmail.com</a>
        </p>
        <p className={'small'}>
          <a href="https://www.instagram.com/samusang/">@samusang</a><br/>
          <a href="https://www.linkedin.com/in/samuele-sanguineti-1269b5206/">Linkedin</a>
        </p>
      </div>
      <div className="col-12 col-md-8 pt-5">
        <div className="w-50">
          <GatsbyImage alt={'Samuele Sanguineti resume pic'}
                       image={getImage(profile)}/>

        </div>
      </div>

      <div className="col-12 col-md border-dark border-left h-100">
        <p className=" "><a
            href={'/samuelesanguineti_cv_eng.pdf'} download>CV english</a>
          <br/>
          <a
              href={'/samuelesanguineti_cv_it.pdf'} download>CV italiano</a>
        </p>
        <p className="font-weight-bold">Additional information about me:</p>
        <p className={'font-weight-bold'}>+ Software</p>
        <ul className="list-unstyled">
          <li>Adobe Photoshop</li>
          <li>Adobe Illustrator</li>
          <li>Adobe Indesign</li>
          <li>Adobe After Effects</li>
          <li>Adobe Premiere</li>
          <li>Word</li>
          <li>Power Point</li>
          <li>Excel</li>
          <li>Keynote</li>
          <li>Figma</li>
          <li>Cinema 4d basics</li>
        </ul>
      </div>

    </div>
  </Layout>;
}

export const query = graphql`{
  profile: file(relativePath: {eq: "samuelesanguineti.jpg"}) {
      id
      relativePath
      childImageSharp {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 1000
        )
      }
      publicURL
  }
}`;