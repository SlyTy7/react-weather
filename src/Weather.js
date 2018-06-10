import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText, Container, Col, Row } from 'reactstrap';
import WeatherIcon from './WeatherIcon.js';

class Weather extends Component {
  render() {
    return (
      <Card inverse body style={{ backgroundColor: '#418a85', borderColor: '#418a85' }}>

        <CardTitle>
          CURRENT WEATHER
        </CardTitle>

        

        
        <Container>
          <Row>
            <Col xs={6}>
              <WeatherIcon code={this.props.weatherCode}/>
            </Col>
            <Col xs={6}>
              <CardText> {this.props.description} </CardText>
              <CardText style={{ fontSize: '50px'}}>
                {this.props.temp} 
                <sup style={{ fontSize: '14px'}}>&#176;F</sup>
              </CardText>
            </Col>
            <Col xs={6}>
              <small>Humidity:</small>
              <CardText style={{ fontSize: '30px'}}>
                {this.props.humidity}%
              </CardText>
            </Col>
            <Col xs={6}>
              <small>Wind:</small>
              <CardText style={{ fontSize: '30px'}}>
                {this.props.wind} mph
              </CardText>
            </Col>
          </Row>
        </Container>
        

      </Card>
    );
  }
}

export default Weather;
