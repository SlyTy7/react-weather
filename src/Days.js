import React, { Component } from 'react';
import { Card, CardTitle, Row, Col } from 'reactstrap';

class Days extends Component {
  render() {
    return (
      <div>
        <Card body inverse color="warning">
          <CardTitle>
            5 Day Forecast
          </CardTitle>
          <Row>
            <Col>
              Day
            </Col>
            <Col>
              Day
            </Col>
            <Col>
              Day
            </Col>
            <Col>
              Day
            </Col>
            <Col>
              Day
            </Col>
          </Row>
        </Card>
      </div>
    );
  }
}

export default Days;
