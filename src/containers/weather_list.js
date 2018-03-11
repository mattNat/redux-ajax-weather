import React, { Component } from 'react';
// data in from redux
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherList extends Component {
  renderWeather(cityData) {
    const name = cityData.city.name;
    const tempsF = cityData.list.map(weather => weather.main.temp*9/5 - 459.67);
    const tempsK = cityData.list.map(weather => weather.main.temp);
    
    // console.log('In F:', tempsF, 'In K:', tempsK);

    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          {/* pixel values */}
          <Sparklines height={120} with={180} data={tempsF}>
            {/* look at docs to see available colors */}
            <SparklinesLine color='red' />
          </Sparklines>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className='table table-hover'>
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
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