import React, { Component } from 'react';

/*
set controlled state
*/
export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {term: ''};

    // this (which is an instance of search bar)
    this.onInputChange = this.onInputChange.bind(this);
  }

  // event object is vanilla js thing
  // this?  whenever we hand callback function
  onInputChange(event) {
    // this.setState (I don't have it)
    this.setState({term: event.target.value});
  }

  render() {
    return (
      <form className='input-group'>
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