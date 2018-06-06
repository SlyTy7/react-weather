import React, { Component } from 'react';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import Cloudy from './icons/cloudy.svg';
import Day from './icons/day.svg';
import Night from './icons/night.svg';
import CloudyDay from './icons/cloudy-day-2.svg';
import CloudyNight from './icons/cloudy-night-2.svg';
import RainyLightDay from './icons/rainy-2.svg';
import RainyModerateDay from './icons/rainy-1.svg';
import RainyHeavyDay from './icons/rainy-3.svg';
import RainyLight from './icons/rainy-4.svg';
import RainyModerate from './icons/rainy-5.svg';
import RainyHeavy from './icons/rainy-6.svg';
import Hail from './icons/rainy-7.svg';
import SnowyModerateDay from './icons/snowy-1.svg';
import SnowyLightDay from './icons/snowy-2.svg';
import SnowyHeavyDay from './icons/snowy-3.svg';
import SnowyLight from './icons/snowy-4.svg';
import SnowyModerate from './icons/snowy-5.svg';
import SnowyHeavy from './icons/snowy-6.svg';
import Thunder from './icons/thunder.svg';


class Weather extends Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherIcon: null,
      weatherCode: this.props.weatherCode,
    }
  }


  setWeatherIcon(){
    let weatherCode = this.props.weatherCode;
    let newIcon = null;

    switch(true) {
      case (weatherCode <= 232 ):
        newIcon = Thunder;
        break;
      case (weatherCode <= 321 ):
        newIcon = RainyLight;
        break;
      case (weatherCode === 500 ):
        newIcon = RainyLightDay;
        break;
      case (weatherCode <= 502 ):
        newIcon = RainyModerateDay;
        break;
      case (weatherCode <= 504 ):
        newIcon = RainyHeavyDay;
        break;
      case (weatherCode === 511 ):
        newIcon = Hail;
        break;
      case (weatherCode === 520 ):
        newIcon = RainyLight;
        break;
      case (weatherCode === 521 ):
        newIcon = RainyModerate;
        break;
      case (weatherCode <= 531 ):
        newIcon = RainyHeavy;
        break;
      case (weatherCode === 600 ):
        newIcon = SnowyLightDay;
        break;
      case (weatherCode === 601 ):
        newIcon = SnowyModerateDay;
        break;
      case (weatherCode === 602 ):
        newIcon = SnowyHeavyDay;
        break;
      case (weatherCode <= 612 ):
        newIcon = Hail;
        break;
      case (weatherCode === 615 ):
        newIcon = SnowyLight;
        break;
      case (weatherCode === 616 ):
        newIcon = SnowyModerate;
        break;
      case (weatherCode === 620 ):
        newIcon = SnowyLight;
        break;
      case (weatherCode === 621 ):
        newIcon = SnowyModerate;
        break;
      case (weatherCode === 622 ):
        newIcon = SnowyHeavy;
        break;
      case (weatherCode <= 800 ):
        newIcon = Day;
        break;
      case (weatherCode === 801 ):
        newIcon = CloudyDay;
        break;
      case (weatherCode === 802 ):
        newIcon = CloudyDay;
        break;
      case (weatherCode === 803 ):
        newIcon = CloudyDay;
        break;
      case (weatherCode === 804 ):
        newIcon = Cloudy;
        break;
    }

    this.setState({
      weatherIcon: newIcon,
    })


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
