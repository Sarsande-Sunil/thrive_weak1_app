import React, { useEffect, useRef, useState } from "react";
import "./Weather.css";
import Moment from "react-moment";
import moment from "moment";
function Weather() {
  const textinput = useRef();
  const [weather, setWeather] = useState([]);
  const [heading, setHeading] = useState("");
  const [humidity, setHumidity] = useState("");
  const [temp, setTemp] = useState("");
  const [pressure, setPressure] = useState("");
  const [sunrise, setSunrise] = useState("");
  const [sunset, setSunset] = useState("");

  // fetch data

  const API_KEY = "440f8e07876056047055a662b864e6d1";
  const hanleInput = async () => {
    const city = textinput.current.value;
    console.log(city);
    setHeading(city);

    // fetch data with city and api key
    try {
      var url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

      const res = await fetch(url);
      const data = await res.json();

      const latitude = data.coord.lat;
      const longitude = data.coord.lon;
      fetchWeatherData(latitude, longitude);
      console.log(latitude, longitude);
    } catch (error) {
      console.log(error);
    }
    document.getElementById(
      "dis1"
    ).innerHTML = `<div class="mapouter"><div class="gmap_canvas">
 <iframe width="250%" height="400" id="gmap_canvas" src="https://maps.google.com/maps?q=${city}&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
 <a href="https://www.whatismyip-address.com/divi-discount/"></a><br>
 <a href="https://www.embedgooglemap.net"></a></div></div>`;
  };

  // fetching the data with longitude and latitude
  async function fetchWeatherData(latitude, longitude) {
    let url = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    setWeather(data);
    setTemp(data.current.temp);
    setHumidity(data.current.humidity);
    setPressure(data.current.pressure);
    setSunrise(new Date(data.current.sunrise*1000).getHours());
    setSunset(new Date(data.current.sunset * 1000).getHours());
   
  }

 

  return (
    <div>
      <input
        ref={textinput}
        type="text"
        placeholder="search your favourite city here"
      />
      <button onClick={hanleInput}>Search</button>
      <div className="heading">
        <h1>
          {"👋👋" + "welcome to your favourite search" + " " + heading + "👋👋"}
        </h1>
      </div>
      <div class="map">
        <div id="dis1"></div>
      </div>
      <div className="current-card">
        <h1>{"humidity" + humidity + "%"}</h1>
        <h1>{"temp" + temp + "kelvin"}</h1>
        <h1>{"pressure" + pressure + "pa"}</h1>
        <h1>{"sunrise" + sunrise + "🌅" + "am"}</h1>
        <h1>{"sunset" + sunset + "🌄" + "pm"}</h1>
      </div>
    </div>
  );
}

export default Weather;
