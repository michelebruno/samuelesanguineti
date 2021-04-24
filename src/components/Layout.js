import React from 'react';
import '../scss/style.scss';
import Link from 'gatsby-link';

export default function Layout({children, header, hideNavigation}) {

  return <div className={'container-fluid'} >
    {hideNavigation || <nav className="row pt-5">
      <div className="col">
        <Link to={'/'}>Back</Link>
      </div>
    </nav>}
    {header && <header className="row ">
      <div className="col-12 col-md-6">
        {typeof header === 'string' ?
            <h1 className={'h3 pt-5 pb-4'}>{header}</h1> :
            header}
      </div>
    </header>}
    <main>{children}</main>
    <footer className={'row py-3'}>
      <div className="col-12">
        <a className="font-weight-bold small"
           href="mailto:samuele.sanguineti96@gmail.com" >samuele.sanguineti96@gmail.com</a>
      </div>
      <div className="col-6">
        <a href="https://www.instagram.com/samusang/" className={"btn btn-link btn-sm"}>Instagram</a><br/>
      </div>
      <div className="col-6">
        <a href="https://www.linkedin.com/in/samuele-sanguineti-1269b5206/" className={"btn btn-link btn-sm"}>Linkedin</a>
      </div>
    </footer>
  </div>;
}