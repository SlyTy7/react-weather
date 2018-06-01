import React, { Component } from 'react';
import { Card, CardImg,  CardBody, CardTitle, CardText } from 'reactstrap';

class Location extends Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>

          <CardBody>
            <CardTitle>
              Location
            </CardTitle>
          </CardBody>
          
          <CardImg src="http://via.placeholder.com/300x150" alt="placeholder"/>

          <CardBody>
            <CardText>{this.props.city}</CardText>
          </CardBody>

        </Card>
      </div>
    );
  }
}

export default Location;
