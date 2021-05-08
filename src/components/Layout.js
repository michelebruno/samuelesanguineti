import React from 'react';
import '../scss/style.scss';
import Link from 'gatsby-link';
import {Helmet} from 'react-helmet';

export default function Layout({children, header, hideNavigation, next}) {

  return <div className={'container-fluid'}>
    <Helmet>
      <meta name="google-site-verification"
            content="BRAsUIc4IGqGXYLixr2JW9eSBiMcR-UUHHcb4IXxrJM"/>
    </Helmet>
    {hideNavigation ||
    <nav className="row pt-5 justify-content-between align-items-center">
      <div className="col">
        <Link to={'/'} className={'  pl-0 text-decoration-none'}
              style={{fontWeight: 400}}>
          samuele<br/>
          sanguineti
        </Link>
      </div>
      {next && next && <div className="col-auto">
        <Link to={next} className={'text-decoration-none'}>next</Link>
      </div>}
    </nav>}
    {header && <header className="row ">
      <div className="col-12 col-md-6 py-3">
        {typeof header === 'string' ?
            <h1 className={'h3'}>{header}</h1> :
            header}
      </div>
    </header>}
    <main>{children}</main>
    <footer className={'row pt-5 pb-3'}>
      <div className="col-9">
        <div className="row">

          <div className="col-12">
            <a className="font-weight-bold small"
               href="mailto:samuele.sanguineti96@gmail.com">samuele.sanguineti96@gmail.com</a>
          </div>
          <div className="col-4 py-1">
            <a href="https://www.instagram.com/samusang/">Instagram</a><br/>
          </div>
          <div className="col-4 py-1">
            <a href="https://www.linkedin.com/in/samuele-sanguineti-1269b5206/">Linkedin</a>
          </div>
        </div>
      </div>
      <div className="col align-self-center text-right">
        <btn className={'btn btn-text px-3'} onClick={(e) => {
          e.preventDefault();

          window.scrollTo(0, 0);

        }}>
          <svg width="8" height="69" viewBox="0 0 8 69" fill="none"
               xmlns="http://www.w3.org/2000/svg">
            <path
                d="M4.35355 0.646446C4.15829 0.451187 3.84171 0.451187 3.64644 0.646446L0.464463 3.82843C0.269201 4.02369 0.269201 4.34027 0.464463 4.53554C0.659725 4.7308 0.976308 4.7308 1.17157 4.53554L4 1.70711L6.82842 4.53554C7.02369 4.7308 7.34027 4.7308 7.53553 4.53554C7.73079 4.34027 7.73079 4.02369 7.53553 3.82843L4.35355 0.646446ZM4.5 69L4.5 1L3.5 1L3.5 69L4.5 69Z"
                fill="black"/>
          </svg>
        </btn>
      </div>
    </footer>
  </div>;
}