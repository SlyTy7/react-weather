import React, { Component } from 'react';
import { Card, CardTitle } from 'reactstrap';

class Day extends Component {
  render() {
    return (
      <div>
        <Card body inverse color="info">
          <CardTitle>
            Day
          </CardTitle>
        </Card>
      </div>
    );
  }
}

export default Day;
