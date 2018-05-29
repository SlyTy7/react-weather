import React, { Component } from 'react';
import { Card, CardImg,  CardBody, CardTitle, CardText } from 'reactstrap';

class Location extends Component {
  render() {
    return (
      <div>
        <Card body inverse color="primary">

          <CardBody>
            <CardTitle>
              <h1>Location</h1>
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
