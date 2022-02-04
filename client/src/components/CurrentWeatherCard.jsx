import React, { useEffect, useState } from 'react';

const CurrentWeatherCard = (props) => {

  const [weatherPhoto, setWeatherPhoto] = useState('');

  const changeWeatherPhoto = () => {
    let condition = props.currentCityWeather.days[0].conditions.toLowerCase();
    if (condition.includes('lightning')) {
      setWeatherPhoto('./weatherPics/lightning.gif');
    } else if (condition.includes('overcast')) {
      setWeatherPhoto('./weatherPics/overcast.jpeg');
    } else if (condition.includes('rain')) {
      setWeatherPhoto('./weatherPics/rain.gif');
    } else if (condition.includes('wind')) {
      setWeatherPhoto('./weatherPics/windy.gif');
    } else if (condition.includes('sun')) {
      setWeatherPhoto('./weatherPics/sunny.webp');
    } else if (condition.includes('cloudy')) {
      setWeatherPhoto('./weatherPics/cloudy.gif');
    } else if (condition.includes('clear')) {
      setWeatherPhoto('./weatherPics/clear.jpeg');
    }
  }

  useEffect(() => {
    changeWeatherPhoto();
  }, [changeWeatherPhoto])

  console.log('🌝', props.currentCityWeather)
  const date = new Date()
  const newDate = date.toDateString() + ' ' + date.toTimeString()
  // console.log(props.currentCityWeather.alerts[0].description.split('*'))
  return (
    <div className='d-flex flex-column align-items-center'>

      {/* <div className="card" style={{ width: "20rem" }}>
        <div>
          {props.currentCityWeather.resolvedAddress}
        </div>
        <img src={weatherPhoto} className="card-img-top weatherPic" alt="weather" />
        <div className="card-body">
          <p className="card-text">Currently {props.currentCityWeather.days[0].temp}° F</p>
          <p className="card-text">Feels like {props.currentCityWeather.days[0].feelslike}</p>
          <p className="card-text">Conditions {props.currentCityWeather.days[0].conditions}</p>
          <p className="card-text">Humidity {props.currentCityWeather.days[0].humidity}%</p>
          <p className="card-text">Visibility {props.currentCityWeather.days[0].visibility} mi</p>
          <p className="card-text">UV Index {props.currentCityWeather.days[0].uvindex}</p>
          <p className="card-text">Wind Speed {props.currentCityWeather.days[0].windspeed} mph</p>
        </div>
      </div> */}

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
                </ul>
              </div>
              <div class="col-md-6">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item">{props.currentCityWeather.days[0].temp}° F</li>
                  <li class="list-group-item">{props.currentCityWeather.days[0].feelslike}° F</li>
                  <li class="list-group-item">{props.currentCityWeather.days[0].conditions}</li>
                  <li class="list-group-item">{props.currentCityWeather.days[0].humidity}%</li>
                  <li class="list-group-item">{props.currentCityWeather.days[0].visibility} mi</li>
                  <li class="list-group-item">{props.currentCityWeather.days[0].uvindex}</li>
                  <li class="list-group-item">{props.currentCityWeather.days[0].windspeed} mph</li>
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