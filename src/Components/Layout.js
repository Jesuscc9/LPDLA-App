import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';

function Layout(props){
  return(
    <React.Fragment>
      <Navbar/>
      {props.children}
      <Footer/>
    </React.Fragment>
  ) 
}

export default Layout;