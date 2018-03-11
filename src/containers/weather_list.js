import React, { Component } from 'react';
// data in from redux
import { connect } from 'react-redux';
import Chart from '../components/chart';
import GoogleMap from '../components/google_map';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempsF = cityData.list.map(weather => weather.main.temp*9/5 - 459.67); // F
    const tempsK = cityData.list.map(weather => weather.main.temp); // K
    const pressures = cityData.list.map(weather => weather.main.pressure); // hPa
    const humidities = cityData.list.map(weather => weather.main.humidity); // % 
    
    // console.log('In F:', tempsF, 'In K:', tempsK);
    // console.log('Pressure:', pressures);
    // console.log('humidities:', humidities);
    
    return (
      <tr key={name}>
        <td><GoogleMap /></td>
        <td><Chart data={tempsF} color='orange' units='&deg;F' /></td>
        <td><Chart data={pressures} color='green' units='hPa' /></td>
        <td><Chart data={humidities} color='black' units='%' /></td>                    
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (&deg;F)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps({ weather }) {
  return { weather }; // { weather } === { weather: weather }
}

export default connect(mapStateToProps)(WeatherList);