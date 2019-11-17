import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Row, Col
  } from 'reactstrap';
  import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
  import Grid from '@material-ui/core/Grid';
  import Paper from '@material-ui/core/Paper';
  import '../css/theme.css';

const ResponsiveTemp = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);


 

  return (
      <div>
    
      <Navbar  style={{padding:10,minWidth:765}} color="dark" light expand="md">
        <NavbarBrand className="headerBar" style={{color:'#fff'}} href="/">PSD WEBSITES</NavbarBrand>
        <NavbarToggler right onClick={toggle} />
        <Collapse  isOpen={isOpen} navbar>
        <Nav navbar>
        <NavItem>
          <NavLink className="textColor" style={{color:'#fff'}} href="#">UI KITS</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="textColor" style={{color:'#fff'}} href="#">PREMIUM PSD FILES</NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="textColor" style={{color:'#fff'}} href="#">ABOUT </NavLink>
        </NavItem>
        <NavItem>
          <NavLink className="textColor" style={{color:'#fff'}} href="#">BLOG</NavLink>
        </NavItem>
      </Nav>
        </Collapse>
      </Navbar>

     
 <div style={{...styles.greenBlock,minWidth:765}}>
     <div style={{

       padding:50
     }}>
         <div className="contentWrap">
<h1 className="templateHeading">
    Awesome Free PSD templates & Resources
</h1>


   

  
   <Grid style={{marginTop:20}} container spacing={2}>
   <Grid item xs={6}>
   <p className="heading" >wwww.BlazRobar.com</p> 
        </Grid>
        
   <Grid item xs={6}>
   <ArrowForwardIosIcon/>
        </Grid>
</Grid>
</div>

</div>

<div className="black-pink">
<div className="textBlock">

<p>I'm like the Robin Hood of PSD files</p>
</div>


<div className="pinkBlock">

<  ArrowForwardIosIcon className="centering"></ArrowForwardIosIcon>
</div>
</div>



  </div> 

  {/* Image blocks */}

  
</div>
   
  );
}



const styles = {
    
        greenBlock:{
            backgroundColor:'#16B1C5',
            height:500,
            color:'#fff',
            
           
        },
      
   
  }
export default ResponsiveTemp;