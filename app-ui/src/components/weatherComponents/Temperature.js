import React from 'react';
import axios from 'axios';
import {connect} from 'react-redux';

class WeatherApiCall extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      weather: '',
    };
  }

  componentDidMount(){
    axios({
      url:"http://localhost:3000/city/atlanta,ga",
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      method: 'GET',
      responseType: 'json'
      
    }).then((res) => {
      this.setState({
        weather: res.data
      }); 
    });
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <p>{this.state.weather.humidity}</p>
      </div>
    )
  };
}

function mapStateToProps(state){
  console.log(state);
  return {
    weather: state.get('weather')
  }
}

export const WeatherContainer = connect(mapStateToProps)(WeatherApiCall);