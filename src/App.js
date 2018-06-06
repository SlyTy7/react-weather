import React, { Component } from 'react';
import axios from 'axios';
import { Container, Card, CardDeck } from 'reactstrap';
import Weather from './Weather.js';
import Location from './Location.js';
import Days from './Days.js';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      isDataLoaded: false,
    }
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
        let description = res.data.weather[0].description;
        let weatherCode = res.data.weather[0].id;
        let wind = res.data.wind.speed;

        console.log('WEATHER API DATA:');
        console.log(res.data);

        this.setState({
          currentTemp: currentTemp,
          currentTempMax: currentTempMax,
          currentTempMin: currentTempMin,
          currentHumidity: currentHumidity,
          description: description,
          weatherCode: weatherCode,
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
        let forecastData = res.data.list;
        let forecast = [];

        for(let i = 0; i < 5; i++){
          let timeChunk = forecastData.slice((i * 8), (i * 8) + 8);
          forecast.push(timeChunk);
        }

        this.setState({
          forecast: forecast,
        });

        //console.log('FORECAST API DATA:');
        //console.log(res.data);

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
          .then(axios.spread( (weather, forecast) => {
            this.setState({
              isDataLoaded: true,
            })
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

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div id="app" className='p-4'>
        {
          this.state.isDataLoaded ? (  
            <Container>
              <Card 
                body 
                inverse 
                style={{ backgroundColor: '#333', borderColor: '#333', boxShadow: '#0c0c0c 7px 7px 20px' }}>

                <CardDeck className='mb-4'>
                  <Weather 
                    temp={this.state.currentTemp} 
                    humidity={this.state.currentHumidity}
                    wind={this.state.wind}
                    description={this.state.description}
                    weatherCode={this.state.weatherCode} />

                  <Location 
                    city={this.state.city}/>
                </CardDeck>
     
                <Days
                  forecast={this.state.forecast}/>

              </Card>
            </Container>
          ) : <div>Loading...</div>
        }
      </div>
    );
  }
}

export default App;
