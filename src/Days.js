import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';
import Day from './Day.js';

class Days extends Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#418a85', borderColor: '#418a85' }}>
          <CardTitle>
            5 Day Forecast
          </CardTitle>
          <Row>

            <Col>
              <Day weather={this.props}
              />
            </Col>

            <Col>
              <Day weather={this.props.forecastDays}
              />
            </Col>

            <Col>
              <Day weather={this.props.forecastDays}
              />
            </Col>

            <Col>
              <Day weather={this.props.forecastDays}
              />
            </Col>

            <Col>
              <Day weather={this.props.forecastDays}
              />
            </Col>

          </Row>
        </Card>
      </div>
    );
  }
}

export default Days;
