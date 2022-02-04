import React from 'react';

const WeatherAlerts = (props) => {

  return (
    <div className="container card mb-3 mainCard" style={{ width: "50rem" }}>
      <div className="d-flex justify-content-center">
        <p className="card-title cityTitle">{props.alert.event}</p>
      </div>
      <div className="col-md-12">
        <div className="card-body">
          <ul className="list-group list-group-flush">
            <li className="list-group-item">{props.alert.headline}</li>
            {props.alert.description.split('*').map((line, index) => {
              return (
                <li className="list-group-item" key={index}>{line}</li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default WeatherAlerts;