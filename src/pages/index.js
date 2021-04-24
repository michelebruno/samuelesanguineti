import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'gatsby';
import SEO from '../components/SEO';

export default function Home() {

  const pages = [
    // {
    //   label: "The CJ",
    //   path: "/"
    // },
    {
      label: 'Golfo del Tigullio',
      path: '/golfodeltigullio/'
    },
    {
      label: "Faith Connexion",
      path: "/faithconnexion/"
    },
    // {
    //   label: "The Striped Shop",
    //   path: "/"
    // },
    {
      label: 'Thè San Benedetto',
      path: "/sanbenedetto/"
    },
    {
      label: 'Vetro',
      path: "/vetro/"
    },
    // {
    //   label: 'ACBC x Sunnei',
    //   path: "/sanbenedetto/"
    // },
    // {
    //   label: 'Personal Photo',
    //   path: "/sanbenedetto/"
    // },
  ]
  return <Layout hideNavigation>
    <SEO title={"Portfolio"}/>
    <header className="row py-3">
      <h1 className={'h3 col-6'} style={{lineHeight: '1'}}>samuele<br/>
        sanguineti<span className={"d-none d-md-inline"}>__Portfolio</span></h1>
      <div className="col align-self-center text-right">
        <Link to={'/about'}>about</Link>
      </div>
    </header>
    <div className="row">
      <div className="col-12 col-lg-6 border border-dark border-left-0
        border-bottom-0 d-flex flex-column justify-content-between"
           style={{minHeight: '70vh'}} >
        <h2 className={'h4 py-5'} >
          My name is Samuele,
          and I am attending a Master degree
          in Design for the Fashion System
          at Politecnico di Milano.
        </h2>
        <h4  >Fashion and communication designer</h4>
      </div>
      <nav className="col-12 col-lg-6 offset-lg-6">
        <ul className="list-unstyled projects-list">
          {pages.map(({label, path}) =><li key={path} className={"h2 border-bottom border-dark pt-4"}>
            <Link to={path}>{label}</Link>
          </li> )}

        </ul>
      </nav>
    </div>

  </Layout>;
}