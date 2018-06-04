import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import Cloudy from './icons/cloudy.svg';
import Day from './icons/day.svg';
import Night from './icons/night.svg';
import CloudyDay from './icons/cloudy-day-1.svg';
import CloudyNight from './icons/cloudy-night-1.svg';




class Weather extends Component {
  constructor(props){
    super(props);
    
    this.state = {
      weatherIcon: Day,
    }
  }

  getWeatherIcon() {
    let test = this.props.description;
    console.log(test);
  }

  componentDidMount(){
    this.getWeatherIcon();
  }

  render() {
    return (
      <Card inverse style={{ backgroundColor: '#418a85', borderColor: '#418a85' }}>

        <CardTitle className='p-4'>
          CURRENT WEATHER
        </CardTitle>

        <img 
          className="mx-auto"
          width="40%"
          height="40%"
          src={this.state.weatherIcon} 
          alt="placeholder"/>

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
