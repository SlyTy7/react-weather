import React, { Component } from 'react';
import { Card, CardTitle, CardGroup } from 'reactstrap';
import Day from './Day.js';

class Days extends Component {
  constructor(props){
    super(props);

    this.state = {
      days: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
    }
  }

  getCurrentDay(){
    let d = new Date();
    let currentDayIndex = d.getDay();

    this.setState({
      currentDayIndex: currentDayIndex,
    })
  }

  componentDidMount(){
    this.getCurrentDay();
  }

  render() {
    return (
      <Card body inverse style={{ backgroundColor: '#418a85', borderColor: '#418a85' }}>
        <CardTitle>
          5 DAY FORECAST
        </CardTitle>
        <CardGroup>

          {
            this.props.forecast && this.props.forecast.map( (item, index) => {
              return (
                <Day 
                  key={'key'+index}
                  weather={this.props.forecast}
                  day={this.state.days[this.state.currentDayIndex + index]}/>
              )
            })
          }     

        </CardGroup>
      </Card>
    );
  }
}

export default Days;
