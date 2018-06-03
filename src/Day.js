import React, { Component } from 'react';
import { Card, CardHeader, Table } from 'reactstrap';

class Day extends Component {
  render() {
    return (
      <Card inverse style={{backgroundColor: '#333', borderColor: '#333'}}>
        <CardHeader>
          {this.props.day}
        </CardHeader>
          
        <Table size='sm' borderless>
          <thead>
            <tr>
              <th>Time</th>
              <th>Low</th>
              <th>High</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Larry</td>
              <td>the Bird</td>
            </tr>
          </tbody>
        </Table>

      </Card>
    );
  }
}

export default Day;
