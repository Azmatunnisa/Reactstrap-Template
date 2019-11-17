import React, { Component } from 'react';
import {Row,Col,Container} from 'reactstrap';
import '../css/TextCompStyle.css'


class TextComp extends Component {
    state = {  }
    render() { 
        return ( 

<Container fluid className="containStyle">


<Row>
        <Col className="colStyle" xs="6">
        <h2>BlazRobar.com</h2>

        </Col>


        <Col xs="6"></Col>
      </Row>

      <Row>
        <Col className="paraStyle" sm={12} md={6}>
        <p>

        Lorem ipsum dolor sit amet,
         consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
           ut labore et dolore
            magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              <br/>
              <br/>
              magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
               
        </p>

        </Col>


        <Col className="paraStyle" sm={12} md={6}>

            <p>
            Lorem ipsum dolor sit amet,
         consectetur adipiscing elit,
          sed do eiusmod tempor incididunt
           ut labore et dolore
            magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              <br/>
              <br/>
              magna aliqua. Ut enim ad minim veniam,
             quis nostrud exercitation ullamco laboris 
             nisi ut aliquip ex ea commodo consequat.
              Duis aute irure dolor in reprehenderit 
              in voluptate velit esse cillum dolore eu fugiat nulla pariatur.

            </p>
        </Col>
      </Row>
      



      
</Container>
            
         );
    }
}
 
export default TextComp;