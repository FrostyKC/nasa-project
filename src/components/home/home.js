import React, { Component } from 'react';
const axios = require('axios');

const nasaKey = process.env.REACT_APP_NASA_API;

class home extends Component {
  state = {
    apod: '',
  };

  componentDidMount() {
    this.getApod();
  }

  getApod() {
    axios
      .get(`https://api.nasa.gov/planetary/apod?api_key=${nasaKey}`)
      .then((response) => {
        console.log('nasa api', response.data);
        this.setState({
          apod: response.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="apod">
        <h1>Astronomy Picture of the Day</h1>
        <h3>{this.state.apod.title}</h3>
        <p>{this.state.apod.date}</p>
        <img src={this.state.apod.url} alt={this.state.apod.title} />
        <p>{this.state.apod.explanation}</p>
      </div>
    );
  }
}

export default home;
