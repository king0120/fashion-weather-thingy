import React from 'react';
import { WeatherContainer } from './weatherComponents/Temperature';

export default class Body extends React.Component {
  render() {
    return (
      <div>
        <h1>Hey there!</h1>
        <WeatherContainer />
      </div>
    )
  }
} 