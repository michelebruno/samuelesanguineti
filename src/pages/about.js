import React from 'react';
import Layout from '../components/Layout';

export default function Home() {

  return <Layout>
    <header className="row pt-5">
      <div className="col-12">
        <h1 className={'h3'}>Hi, my name is<br/>Samuele Sanguineti</h1>
      </div>
    </header>
    <div className="row">
      <div className="col-12 col-md-8 border border-dark border-left-0
        border-bottom-0" >
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
      <div className="col-12 col-md">
        <p className={'small'}>Milano / Italia <br/>
          for information and collaboration:<br/>
          <a className="font-weight-bold" href="mailto:samuele.sanguineti96@gmail.com">samuele.sanguineti96@gmail.com</a>
        </p>
        <p className={'small'}>
          <a href="https://www.instagram.com/samusang/">@samusang</a><br/>
          <a href="https://www.linkedin.com/in/samuele-sanguineti-1269b5206/">Linkedin</a>
        </p>
      </div>
      <div className="col-12 col-md-8 border-dark border-right">

      </div>

      <div className="col-12 col-md">

        <p className="font-weight-bold">Additional information about me:</p>
        <p className={'font-weight-bold'}>Software</p>
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