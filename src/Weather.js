import React, { Component } from 'react';
import { Card, CardImg,  CardBody, CardTitle, CardText } from 'reactstrap';

class Weather extends Component {


  render() {
    return (
      <div>
        <Card>
  
          <CardImg src="http://via.placeholder.com/100x100" alt="placeholder"/>
          <CardBody>
            <CardTitle>Card Title</CardTitle>
            <CardText>This is a wider card with supporting text below as a natural lead-in 
            to additional content. This content is a little bit longer.
            </CardText>

            <CardText>
              {this.props.description}
            </CardText>
            <CardText>
              Temp: {this.props.temp}
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
