
import React, { Component } from 'react';
import Image from 'react-bootstrap/Image';
import {Col,Row,Container} from 'reactstrap';
import image from '../images/colorblock.jpg';
import image1 from '../images/blocktwo.jpg';
import image2 from '../images/blockthree.jpg';
import '../css/gridStyles.css';



class GridComp extends Component {
    
    render() { 
        return ( 
<div>
            <Container style={{paddingRight:0,paddingLeft:0}} fluid className="containerStyle">
 <Row className="noMargin">
    <Col className="noPadding" sm={12} md={4}>
      <Image className="imageStyle" src={image} fluid/>
    </Col>
    <Col className="noPadding" sm={12} md={4}>
      <Image className="imageStyle" src={image2}  fluid/>
    </Col>
    <Col  className="noPadding" sm={12} md={4}>
      <Image className="imageStyle" src={image1}  fluid/>
    </Col>
  </Row> 








</Container>







</div>
         );
    }
}
 

export default GridComp;