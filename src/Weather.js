import React, { Component } from 'react';

class Weather extends Component {


  render() {
    return (
      <div>
        <h2 className="mb-3">
          Weather
        </h2>
        <img src="http://via.placeholder.com/100x100" alt="placeholder"/>
        <p>
          {this.props.description}
        </p>
        <p>
          Temp: {this.props.temp}
        </p>
        <p>
          Humidity: {this.props.humidity}%
        </p>
        <p>
          Wind: {this.props.wind} mph
        </p>
      </div>
    );
  }
}

export default Weather;
