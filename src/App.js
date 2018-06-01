import React, { Component } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card } from 'reactstrap';
import Weather from './Weather.js';
import Location from './Location.js';
import Days from './Days.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {

    }
  }

  componentDidMount() {
    this.getData();
  }

  //gets users current weather
  getWeather(lat, lon) {
    return axios.get('http://api.openweathermap.org/data/2.5/weather', {
      params: {
        lat: lat,
        lon: lon,
        appID: '42367b52a4538143afa34f42fb27ea14',
        units: 'imperial'
      }
    })
      .then((res) => {
        let currentTemp = res.data.main.temp.toFixed(1);
        let currentTempMax = res.data.main.temp_max.toFixed(1);
        let currentTempMin = res.data.main.temp_min.toFixed(1);
        let currentHumidity = res.data.main.humidity;
        let description = res.data.weather[0].main;
        let wind = res.data.wind.speed;

        console.log('WEATHER API DATA:');
        console.log(res.data);

        this.setState({
          currentTemp: currentTemp,
          currentTempMax: currentTempMax,
          currentTempMin: currentTempMin,
          currentHumidity: currentHumidity,
          description: description,
          wind: wind,
        });
      })
      .catch((res) => {
        console.log('ERROR: USERS WEATHER API CALL FAILED');
      })
  }


  //gets users weather forecast
  getForecast(lat, lon) {
    return axios.get('http://api.openweathermap.org/data/2.5/forecast', {
      params: {
        lat: lat,
        lon: lon,
        appID: '42367b52a4538143afa34f42fb27ea14',
        units: 'imperial'
      }
    })
      .then((res) => {
        let forecast = res.data.list;

        this.setState({
          forecast: forecast,
        });

        console.log('FORECAST API DATA:');
        console.log(res.data);

      })
      .catch((res) => {
        console.log('ERROR: USERS FORECAST API CALL FAILED');
      })
  }

  //gets data from weather and forecast api calls
  getData(){
    //gets users current gps coordinates
    axios.get('http://ipinfo.io/json')
      .then((res) => {
        let city = res.data.city;
        let lat = res.data.loc.split(",")[0];
        let lon = res.data.loc.split(",")[1];

        //passes gps coordinates to weather and forecast requests
        axios.all([this.getWeather(lat, lon), this.getForecast(lat, lon)])
          .then(axios.spread(function (weather, forecast) {
            console.log('Requests Complete');
          }))
          .catch((err) => {
            console.log('ERROR: WEATHER AND/OR FORECAST API CALL FAILED');
          })

        //save users current city to state
        this.setState({
          city: city,
        });
      })
      .catch((err) => {
        console.log('ERROR: USERS LOCATION API CALL FAILED');
        console.log(err);
      })
  }

  render() {
    return (
      <div id="app" className='p-3'>
        
        <Container>
          <Card body inverse color="primary">
            <Row className="mb-2">

              <Col xs="12" md="6">
                <Weather 
                  temp={this.state.currentTemp} 
                  humidity={this.state.currentHumidity}
                  wind={this.state.wind}
                  description={this.state.description}
                  />
              </Col>

              <Col xs="12" md="6">
                <Location 
                  city={this.state.city}
                />
              </Col>

            </Row>
            <Row className="mt-2">
  
              <Col xs="12">
                <Days

                />
              </Col>

            </Row>
          </Card>
        </Container>
      </div>
    );
  }
}

export default App;
