import React from 'react';
import Layout from '../components/Layout';
import {Link} from 'gatsby';

export default function Home() {

  const pages = [
    {
      label: 'Golfo del Tigullio',
      path: '/golfodeltigullio'
    },
    {
      label: 'Thè San Benedetto',
      path: "/sanbenedetto"
    },
  ]
  return <Layout hideNavigation>
    <header className="row py-3">
      <h1 className={'h3 col-6'} style={{lineHeight: '1'}}>samuele<br/>
        sanguineti__Portfolio</h1>
      <div className="col align-self-center text-right">
        <Link to={'/about'}>about</Link>
      </div>
    </header>
    <div className="row">
      <div className="col-12 col-md-6 border border-dark border-left-0
        border-bottom-0 d-flex flex-column justify-content-between"
           style={{minHeight: '75vh'}}>
        <h2 className={'h4 py-5'}>
          My name is Samuele,
          and I am attending a Master degree
          in Design for the Fashion System
          at Politecnico di Milano.
        </h2>
        <h4 className={'text-right'}>Fashion and communication designer</h4>
      </div>
      <div className="col-12 col-md-6 offset-md-6">
        <ul className="list-unstyled">
          {pages.map(({label, path}) =><li key={path} className={"h2 border-bottom border-dark pt-3"}>
            <Link to={path}>{label}</Link>
          </li> )}

        </ul>
      </div>
    </div>

  </Layout>;
}