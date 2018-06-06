import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import Cloudy from './icons/cloudy.svg';
import Day from './icons/day.svg';
import Night from './icons/night.svg';
import CloudyDay from './icons/cloudy-day-1.svg';
import CloudyNight from './icons/cloudy-night-1.svg';
import Rainy1 from './icons/rainy-1.svg';
import Rainy2 from './icons/rainy-2.svg';
import Rainy3 from './icons/rainy-3.svg';
import Rainy4 from './icons/rainy-4.svg';
import Rainy5 from './icons/rainy-5.svg';
import Rainy6 from './icons/rainy-6.svg';
import Rainy7 from './icons/rainy-7.svg';
import Snowy1 from './icons/rainy-1.svg';
import Snowy2 from './icons/rainy-2.svg';
import Snowy3 from './icons/rainy-3.svg';
import Snowy4 from './icons/rainy-4.svg';
import Snowy5 from './icons/rainy-5.svg';
import Snowy6 from './icons/rainy-6.svg';
import Thunder from './icons/thunder.svg';


class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherIcon: Day,
      weatherCode: this.props.weatherCode,
    }
  }


  setWeatherIcon(){
    console.log(this.state);
    const weatherCode = this.props.weatherCode;

    if(weatherCode && ( weatherCode >= 700 && weatherCode < 800)){
      this.setState({
        weatherIcon: Day,
      })
    }
  }

  componentDidMount(){
    this.setWeatherIcon();
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
