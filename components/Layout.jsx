import React from 'react';
import Header from './Header';

const categories =[
    {name: "React", slug:"react", }, {name:"Web developmentt", "slug":"web-dev"}
  ]
  
const Layout = ({ children }) => (
  <>
  <Header categories={categories}/>
    {children}
  </>
);

export default Layout;
