import React, { useEffect, useState } from 'react';
import helpers from './helpers';
import WeatherAlerts from './WeatherAlerts.jsx';

const CurrentWeatherCard = (props) => {

  const [weatherPhoto, setWeatherPhoto] = useState('');

  const changeWeatherPhoto = () => {
    const condition = props.currentCityWeather.days[0].conditions.toLowerCase();
    const weatherPhoto = helpers.changeWeatherPic(condition)
    setWeatherPhoto(weatherPhoto);
  }

  useEffect(() => {
    changeWeatherPhoto();
  }, [changeWeatherPhoto])

  const { temp, feelslike, conditions, humidity, visibility,
    uvindex, windspeed, datetime } = props.currentCityWeather.days[0];
    
    // console.log('🌝', props.currentCityWeather)
  return (
    <div className='d-flex flex-column align-items-center'>

      <div className="container card mb-3 mainCard" style={{ width: "50rem" }}>
        <div className="d-flex justify-content-center">
          <p className="card-title cityTitle">{props.currentCityWeather.resolvedAddress}</p>
        </div>
        <div className="row g-0">
          <div className="col-md-5 d-flex align-items-center">
            <img src={weatherPhoto} className="card-img-top weatherPic" alt="weather" />
          </div>
          <div className="col-md-7">
            <div className="card-body d-flex flex-row">
              <div className="col-md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Currently</li>
                  <li className="list-group-item">Feels like</li>
                  <li className="list-group-item">Conditions</li>
                  <li className="list-group-item">Humidity</li>
                  <li className="list-group-item">Visibility</li>
                  <li className="list-group-item">UV Index</li>
                  <li className="list-group-item">Wind Speed</li>
                  <li className="list-group-item">Local Date</li>
                </ul>
              </div>
              <div className="col-md-6">
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{temp}° F</li>
                  <li className="list-group-item">{feelslike}° F</li>
                  <li className="list-group-item">{conditions}</li>
                  <li className="list-group-item">{humidity}%</li>
                  <li className="list-group-item">{visibility} mi</li>
                  <li className="list-group-item">{uvindex}</li>
                  <li className="list-group-item">{windspeed} mph</li>
                  <li className="list-group-item">{datetime}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.currentCityWeather.alerts.length > 0 ?
        <WeatherAlerts alert={props.currentCityWeather.alerts[0]} /> :
        <div></div>
      }

    </div>
  )
}

export default CurrentWeatherCard;