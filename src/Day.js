import React, { Component } from 'react';
import { Card, CardHeader, Table } from 'reactstrap';

class Day extends Component {
  constructor(props){
    super(props);

    this.state = {
      temps: {
        morning: null,
        noon: null,
        evening: null,
      }
    }
  }

  getDayForecast() {
    let weather = this.props.weather;
    let morningTemp = weather[1].main.temp.toFixed(0);
    let noonTemp = weather[3].main.temp.toFixed(0);
    let eveningTemp = weather[5].main.temp.toFixed(0);

    this.setState({
      temps: {
        morning: morningTemp,
        noon: noonTemp,
        evening: eveningTemp,
      }
    })
    
  }

  componentDidMount(){
    this.getDayForecast();
  }

  render() {
    return (
      <Card inverse style={{backgroundColor: '#333', borderColor: '#fff'}}>
        <CardHeader>
          {this.props.day}
        </CardHeader>
          
        <Table size='sm'>
          <thead>
            <tr>
              <th>Time</th>
              <th>Temp</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">6am</th>
              <td>{this.state.temps.morning}</td>
            </tr>
            <tr>
              <th scope="row">12pm</th>
              <td>{this.state.temps.noon}</td>
            </tr>
            <tr>
              <th scope="row">6pm</th>
              <td>{this.state.temps.evening}</td>
            </tr>
          </tbody>
        </Table>

      </Card>
    );
  }
}

export default Day;
