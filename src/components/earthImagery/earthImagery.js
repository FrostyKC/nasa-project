import React, { Component } from 'react';
const axios = require('axios');

const nasaKey = process.env.REACT_APP_NASA_API;

class earthImagery extends Component {
  state = {
    location: 'Class Component',
    earthImg: '',
  };

  componentDidMount() {
    if ('geolocation' in navigator) {
      console.log('Geolocation will work.');
    } else {
      console.log('Geolocation is not available on this browser.');
    }
  }

  getStartingLocation = (event) => {
    this.setState({
      earthImg: 'clicked',
    });
    navigator.geolocation.getCurrentPosition(this.startSuccess, this.error);
  };
  startSuccess = (pos) => {
    let cords = pos.coords;
    console.log('worked');
    axios
      .get(
        `https://api.nasa.gov/planetary/earth/assets?lon=${cords.longitude}&lat=${cords.latitude}&date=2021-05-01&&dim=0.10&api_key=${nasaKey}`
      )
      .then((response) => {
        console.log('nasa api', response);
        this.setState({
          earthImg: response.data.url,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  error = (err) => {
    console.log(err);
  };

  render() {
    let earthImage;
    if (this.state.earthImg === '') {
      earthImage = <></>;
    } else if (this.state.earthImg === 'clicked') {
      earthImage = <h2>Loading Image</h2>;
    } else {
      earthImage = (
        <img
          src={this.state.earthImg}
          alt="earth at current devices coordinates"
        />
      );
    }

    return (
      <div className="earthImg">
        {/* <pre>{JSON.stringify(this.state)}</pre> */}
        <h1>Landsat 8 Satellite Image</h1>
        <button
          variant="contained"
          color="secondary"
          onClick={this.getStartingLocation}
        >
          Get Image of device location
        </button>
        <br />
        {earthImage}
      </div>
    );
  }
}

export default earthImagery;
