import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';
import Day from './Day.js';

class Days extends Component {
  render() {
    return (
      <div>
        <Card body inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
          <CardTitle>
            5 Day Forecast
          </CardTitle>
          <Row>
            <Col>
              <Day />
            </Col>
            <Col>
              <Day />
            </Col>
            <Col>
              <Day />
            </Col>
            <Col>
              <Day />
            </Col>
            <Col>
              <Day />
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Days;
