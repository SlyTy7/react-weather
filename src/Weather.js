import React, { Component } from 'react';
import { Card, CardImg,  CardBody, CardTitle, CardText } from 'reactstrap';

class Weather extends Component {


  render() {
    return (
      <div>
        <Card body inverse color="success">

          <CardBody>
            <CardTitle>
              <h1>Current Weather</h1>
            </CardTitle>
          </CardBody>
  
          <CardImg src="http://via.placeholder.com/300x150" alt="placeholder"/>

          <CardBody>
            <CardText>
              {this.props.description}
            </CardText>
            <CardText style={{ fontSize: '48px'}}>
              {this.props.temp} 
              <sup style={{ fontSize: '28px'}}>&#176;F</sup>
            </CardText>
            <CardText>
              Humidity: {this.props.humidity}%
            </CardText>
            <CardText>
              Wind: {this.props.wind} mph
            </CardText>
          </CardBody>

        </Card>
      </div>
    );
  }
}

export default Weather;
