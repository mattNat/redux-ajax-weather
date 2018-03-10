import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/index';

/*
set controlled state
*/
class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term: ''};

    // this (which is an instance of search bar)
    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  // event object is vanilla js thing
  // this?  whenever we hand callback function
  onInputChange(event) {
    // this.setState (I don't have it)
    this.setState({term: event.target.value});
  }

  onFormSubmit(event) {
    event.preventDefault();

    // We need to go and fetch weather data
    this.props.fetchWeather(this.state.term);
    // clear search input, will pass it to value in input
    this.setState({ term: '' });
  }

  render() {
    return (
      <form onSubmit={this.onFormSubmit} className='input-group'>
        <input 
          placeholder='Get a five-day forecast in your favorite city'
          className='form-control'
          value={this.state.term}
          onChange={this.onInputChange}
        />
        <span className='input-group-btn'>
          <button type='submit' className='btn btn-secondary'>Submit</button>
        </span>
      </form>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

// pass null, redux does not need state here
// gives access to this.props.fetchWeather
export default connect(null, mapDispatchToProps)(SearchBar);