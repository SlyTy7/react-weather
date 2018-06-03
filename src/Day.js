import React, { Component } from 'react';
import { Card, CardHeader, Table } from 'reactstrap';

class Day extends Component {
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
              <th>Low</th>
              <th>High</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">6am</th>
              <td>67</td>
              <td>75</td>
            </tr>
            <tr>
              <th scope="row">12pm</th>
              <td>67</td>
              <td>75</td>
            </tr>
            <tr>
              <th scope="row">6pm</th>
              <td>67</td>
              <td>75</td>
            </tr>
          </tbody>
        </Table>

      </Card>
    );
  }
}

export default Day;
