import React, { Component } from 'react';
import { Card, CardHeader } from 'reactstrap';

class Day extends Component {
  render() {
    return (
      <div>
        <Card inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
          <CardHeader>
            {this.props.day}
          </CardHeader>
        </Card>
      </div>
    );
  }
}

export default Day;
