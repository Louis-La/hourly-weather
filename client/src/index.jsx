import React, { useState } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import CurrentWeatherCard from './components/CurrentWeatherCard.jsx';

function App() {

  const [cityName, setCityName] = useState('');
  const [currentCityWeather, setCurrentCityWeather] = useState({});
  const [showWeatherResults, setShowWeatherResults] = useState(false);
  const [showWarning, setShowWarning] = useState(false);

  const getCurrentWeather = () => {
    document.getElementsByClassName('citySearchBar')[0].value = '';
    axios({ method: 'get', url: `/current?id=${cityName}` })
      .then((results) => {
        // console.log(results.data)
        setCurrentCityWeather(results.data);
        setShowWeatherResults(true);
      })
      .catch((error) => {
        setShowWarning(true)
        console.log('Error when executing get request (client side)', error);
      })
  }

  const onCityNameChange = (event) => {
    setShowWarning(false)
    setCityName(event.target.value);
  }

  return (
    <div className="container">

      <div className=" d-flex justify-content-center">
        <img src="dailyweather.png" className="websitelogo" alt="weatherlogo" />
      </div>

      <div>
        <div className="container-sm input-group mb-3 d-flex justify-content-center">
          <div className="col-sm-3 d-flex justify-content-center">
            {showWarning ?
              <button
                className="btn btn-outline-secondary warningMessage"
              >
                Location not found
              </button> :
              ""}
          </div>
          <div className="col-sm-5">
            <input
              type="text"
              className="form-control citySearchBar"
              placeholder="Enter a city name..."
              onChange={onCityNameChange}
            >
            </input>
          </div>
          <div className="col-sm-4">
            <button
              className="btn btn-outline-secondary submitButton citySearchBar"
              type="button"
              id="button-addon2"
              onClick={getCurrentWeather}
            >
              Search
            </button>
          </div>
        </div>
      </div>

      {showWeatherResults ?
        <CurrentWeatherCard
          currentCityWeather={currentCityWeather}
        /> : ''}
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'));