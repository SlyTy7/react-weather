import React, { Component } from 'react';
import { Card, CardImg,  CardBody, CardTitle, CardText } from 'reactstrap';

class Weather extends Component {


  render() {
    return (
      <Card inverse style={{ backgroundColor: '#418a85', borderColor: '#418a85' }}>

        <CardTitle className='p-4'>
          CURRENT WEATHER
        </CardTitle>

        <CardImg src="http://via.placeholder.com/300x150" alt="placeholder"/>

        <CardBody>
          <CardText>
            {this.props.description}
          </CardText>
          <CardText style={{ fontSize: '24px'}}>
            {this.props.temp} 
            <sup style={{ fontSize: '14px'}}>&#176;F</sup>
          </CardText>
          <CardText>
            Humidity: {this.props.humidity}%
          </CardText>
          <CardText>
            Wind: {this.props.wind} mph
          </CardText>
        </CardBody>

      </Card>
    );
  }
}

export default Weather;
