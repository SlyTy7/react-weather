import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';
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
      ]
    }
  }

  componentDidMount(){
    let d = new Date();
    let currentDayIndex = d.getDay();

    this.setState({
      currentDayIndex: currentDayIndex,
    })

  }

  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#418a85', borderColor: '#418a85' }}>
          <CardTitle>
            5 DAY FORECAST
          </CardTitle>
          <Row>

            <Col>
              <Day 
                weather={this.props.forecast} 
                day='Today'/>
            </Col>

            <Col>
              <Day 
                weather={this.props.forecast}
                day='Tomorrow'/>
            </Col>

            <Col>
              <Day 
                weather={this.props.forecast}
                day={this.state.days[this.state.currentDayIndex + 2]}/>
            </Col>

            <Col>
              <Day 
                weather={this.props.forecast}
                day={this.state.days[this.state.currentDayIndex + 3]}/>
            </Col>

            <Col>
              <Day 
                weather={this.props.forecast}
                day={this.state.days[this.state.currentDayIndex + 4]}/>
            </Col>

          </Row>
        </Card>
      </div>
    );
  }
}

export default Days;
