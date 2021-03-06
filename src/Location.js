import React, { Component } from 'react';
import { Card, CardImg,  CardBody, CardTitle, CardText } from 'reactstrap';

class Location extends Component {
  render() {
    return (
      <Card inverse style={{ backgroundColor: '#418a85', borderColor: '#418a85' }}>

        <CardTitle className='p-4'>
          LOCATION
        </CardTitle>
        
        <CardImg src="http://via.placeholder.com/300x150" alt="placeholder"/>

        <CardBody>
          <CardText>{this.props.city}</CardText>
        </CardBody>

      </Card>
    );
  }
}

export default Location;
