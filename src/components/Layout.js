import React from 'react';
import '../scss/style.scss'
export default function Layout({children}) {

  return <div className={'container-fluid'}>
    <main>{children}</main>
  </div>;
}