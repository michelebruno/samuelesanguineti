import React from 'react';
import '../scss/style.scss'
export default function Layout({children}) {

  return <div className={'container-fluid'}>
    <main>{children}</main>
    <footer className={'row'}>
      <div className="col-12">
        <a className="font-weight-bold small" href="mailto:samuele.sanguineti96@gmail.com">samuele.sanguineti96@gmail.com</a>
      </div>
      <div className="col-6">

        <a href="https://www.instagram.com/samusang/">Instagram</a><br/>
      </div>
      <div className="col-6">
        <a href="https://www.linkedin.com/in/samuele-sanguineti-1269b5206/">Linkedin</a>
      </div>

    </footer>
  </div>;
}