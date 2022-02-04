import React, { useEffect, useState } from 'react';
import helpers from './helpers';

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

  // console.log('🌝', props.currentCityWeather)
  const { temp, feelslike, conditions, humidity, visibility, 
          uvindex, windspeed, datetime } = props.currentCityWeather.days[0];

  return (
    <div className='d-flex flex-column align-items-center'>

      <div class="card mb-3 mainCard" style={{ width: "50rem" }}>
        <div class="d-flex justify-content-center">
          <p class="card-title cityTitle">{props.currentCityWeather.resolvedAddress}</p>
        </div>
        <div class="row g-0">
          <div class="col-md-5 d-flex align-items-center">
            <img src={weatherPhoto} className="card-img-top weatherPic" alt="weather" />
          </div>
          <div class="col-md-7">
            <div class="card-body d-flex flex-row">
              <div class="col-md-6">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">Currently</li>
                  <li class="list-group-item">Feels like</li>
                  <li class="list-group-item">Conditions</li>
                  <li class="list-group-item">Humidity</li>
                  <li class="list-group-item">Visibility</li>
                  <li class="list-group-item">UV Index</li>
                  <li class="list-group-item">Wind Speed</li>
                  <li class="list-group-item">Local Date</li>
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{temp}° F</li>
                  <li class="list-group-item">{feelslike}° F</li>
                  <li class="list-group-item">{conditions}</li>
                  <li class="list-group-item">{humidity}%</li>
                  <li class="list-group-item">{visibility} mi</li>
                  <li class="list-group-item">{uvindex}</li>
                  <li class="list-group-item">{windspeed} mph</li>
                  <li class="list-group-item">{datetime}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {props.currentCityWeather.alerts.length > 0 ?
        <div class="card mb-3 mainCard" style={{ width: "50rem" }}>
          <div class="d-flex justify-content-center">
            <p class="card-title cityTitle">{props.currentCityWeather.alerts[0].event}</p>
          </div>
            <div class="col-md-12">
              <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item">{props.currentCityWeather.alerts[0].headline}</li>
                    {props.currentCityWeather.alerts[0].description.split('*').map((line, index) => {
                      return (
                        <li class="list-group-item" key={index}>{line}</li>
                      )
                    })}
                  </ul>
              </div>
            </div>
        </div> :
        <div></div>
      }

    </div>
  )
}

export default CurrentWeatherCard;