const helpers = {
  changeWeatherPic: (condition) => {
    if (condition.includes('lightning')) {
      return './weatherPics/lightning.gif';
    } else if (condition.includes('overcast')) {
      return './weatherPics/overcast.jpeg';
    } else if (condition.includes('rain')) {
      return './weatherPics/rain.gif';
    } else if (condition.includes('wind')) {
      return './weatherPics/windy.gif';
    } else if (condition.includes('sun')) {
      return './weatherPics/sunny.webp';
    } else if (condition.includes('cloudy')) {
      return './weatherPics/cloudy.gif';
    } else if (condition.includes('clear')) {
      return './weatherPics/clear.jpeg';
    }
  }
}

export default helpers;