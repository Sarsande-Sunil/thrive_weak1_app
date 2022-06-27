import React, { useRef, useState } from "react";
import "./Weather.css";

function Weather() {
  const textinput = useRef();
  const [weather, setWeather] = useState([]);
  const [humidity, setHumidity] = useState("0");
  const [temp, setTemp] = useState("0");
  const [pressure, setPressure] = useState("0");
  const [sunrise, setSunrise] = useState("00:00:00");
  const [sunset, setSunset] = useState("00:00:00");
  // state for day1
  const [day, setDay] = useState("day");
  const [night, setNight] = useState("night");
  const [morning, setMorning] = useState("morning");
  const [evening, setEvening] = useState("evening");

  // state for day2
  const [day2, setDay2] = useState("day");
  const [night2, setNight2] = useState("night");
  const [morning2, setMorning2] = useState("morning");
  const [evening2, setEvening2] = useState("evening");

  // state for day3
  const [day3, setDay3] = useState("day");
  const [night3, setNight3] = useState("night");
  const [morning3, setMorning3] = useState("morning");
  const [evening3, setEvening3] = useState("evening");

  // state for day 4
  const [day4, setDay4] = useState("day");
  const [night4, setNight4] = useState("night");
  const [morning4, setMorning4] = useState("morning");
  const [evening4, setEvening4] = useState("evening");

  // state for day 5
  const [day5, setDay5] = useState("day");
  const [night5, setNight5] = useState("night");
  const [morning5, setMorning5] = useState("morning");
  const [evening5, setEvening5] = useState("evening");

  // state for day 6
  const [day6, setDay6] = useState("day");
  const [night6, setNight6] = useState("night");
  const [morning6, setMorning6] = useState("morning");
  const [evening6, setEvening6] = useState("evening");

  // state for day 7
  const [day7, setDay7] = useState("day");
  const [night7, setNight7] = useState("night");
  const [morning7, setMorning7] = useState("morning");
  const [evening7, setEvening7] = useState("evening");

  // state for day 8
  const [day8, setDay8] = useState("day");
  const [night8, setNight8] = useState("night");
  const [morning8, setMorning8] = useState("morning");
  const [evening8, setEvening8] = useState("evening");

  const [time, setTime] = useState();
  const [date, setDate] = useState();

  // fetch data

  const API_KEY = "440f8e07876056047055a662b864e6d1";
  const hanleInput = async () => {
    const city = textinput.current.value;
    console.log(city);

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
    console.log("data", data);
    setWeather(data);
    setTemp(data.current.temp);
    setHumidity(data.current.humidity);
    setPressure(data.current.pressure);
    setSunrise(new Date(data.current.sunrise * 1000).getHours());
    setSunset(new Date(data.current.sunset * 1000).getHours());

    // data for day1 one only
    setDay(data.daily[0].feels_like.day);
    setMorning(data.daily[0].feels_like.morn);
    setNight(data.daily[0].feels_like.night);
    setEvening(data.daily[0].feels_like.eve);
    // data for day2
    setDay2(data.daily[1].feels_like.day);
    setMorning2(data.daily[1].feels_like.morn);
    setNight2(data.daily[1].feels_like.night);
    setEvening2(data.daily[1].feels_like.eve);

    // data for day 3
    setDay3(data.daily[2].feels_like.day);
    setMorning3(data.daily[2].feels_like.morn);
    setNight3(data.daily[2].feels_like.night);
    setEvening3(data.daily[2].feels_like.eve);

    // data for day 4
    setDay4(data.daily[3].feels_like.day);
    setMorning4(data.daily[3].feels_like.morn);
    setNight4(data.daily[3].feels_like.night);
    setEvening4(data.daily[3].feels_like.eve);

    // data for day 5
    setDay5(data.daily[4].feels_like.day);
    setMorning5(data.daily[4].feels_like.morn);
    setNight5(data.daily[4].feels_like.night);
    setEvening5(data.daily[4].feels_like.eve);

    // data for day 6
    setDay6(data.daily[5].feels_like.day);
    setMorning6(data.daily[5].feels_like.morn);
    setNight6(data.daily[5].feels_like.night);
    setEvening6(data.daily[5].feels_like.eve);

    // data for day 7
    setDay7(data.daily[6].feels_like.day);
    setMorning7(data.daily[6].feels_like.morn);
    setNight7(data.daily[6].feels_like.night);
    setEvening7(data.daily[6].feels_like.eve);

    // data for day 8
    setDay8(data.daily[7].feels_like.day);
    setMorning8(data.daily[7].feels_like.morn);
    setNight8(data.daily[7].feels_like.night);
    setEvening8(data.daily[7].feels_like.eve);
  }

  // implementing current date and time
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  setInterval(() => {
    const time = new Date();
    const month = time.getMonth();
    const date = time.getDate();
    const day = time.getDay();
    const hour = time.getHours();
    const hoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
    const minutes = time.getMinutes();
    const ampm = hour >= 12 ? "PM" : "AM";

    const timeEl =
      (hoursIn12HrFormat < 10 ? "0" + hoursIn12HrFormat : hoursIn12HrFormat) +
      ":" +
      (minutes < 10 ? "0" + minutes : minutes) +
      " " +
      `${ampm}`;

    const dateElL = days[day] + ", " + date + " " + months[month];
    showDate(timeEl, dateElL);
  }, 1000);

  function showDate(timeEl, dateElL) {
    setTime(timeEl);
    setDate(dateElL);
  }
  console.log(time);
  console.log(date);

  return (
    <div className="body">
      <div className="top-div">
        <div className="input-button">
          <input
            ref={textinput}
            type="text"
            placeholder="search your favourite city here"
          />
          <button onClick={hanleInput} className="btn">
            Search
          </button>
        </div>
        <div className="date-time">
          <h3>{time}</h3>
          <h3>{date}</h3>
        </div>
      </div>
      <div className="heading">
      
      </div>

      <div className="mid-container">
        <div className="current-card">
          <h4>{ humidity }</h4>
          <h4>{ temp }</h4>
          <h4>{ pressure }</h4>
          <h4>{sunrise}</h4>
          <h4>{sunset}</h4>
        </div>
        <div class="map">
          <div id="dis1"></div>
        </div>
      </div>

      <div className="daily-card">
        {/* day1 */}
        <div className="daily-handle">
          <div className="img-data">
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt=""
            />
          </div>
          <div className="text-data">
            <h3 className="week-day">Sunday</h3>
            <p>{day}</p>
            <p>{morning}</p>
            <p>{evening}</p>
            <p>{night}</p>
          </div>
        </div>
        {/* day2 */}
        <div className="daily-handle">
          <div className="img-data">
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt=""
            />
          </div>
          <div className="text-data">
            <h3 className="week-day">Monday</h3>
            <p>{day2}</p>
            <p>{morning2}</p>
            <p>{evening2}</p>
            <p>{night2}</p>
          </div>
        </div>
        {/* day3 */}
        <div className="daily-handle">
          <div className="img-data">
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt=""
            />
          </div>
          <div className="text-data">
            <h3 className="week-day">Tuesday</h3>
            <p>{day3}</p>
            <p>{morning3}</p>
            <p>{+evening3}</p>
            <p>{night3}</p>
          </div>
        </div>
        {/* day4 */}
        <div className="daily-handle">
          <div className="img-data">
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt=""
            />
          </div>
          <div className="text-data">
            <h3 className="week-day">Wednesday</h3>
            <p>{day4}</p>
            <p>{morning4}</p>
            <p>{evening4}</p>
            <p>{night4}</p>
          </div>
        </div>
        {/* day5 */}
        <div className="daily-handle">
          <div className="img-data">
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt=""
            />
          </div>
          <div className="text-data">
            <h3 className="week-day">Thursday</h3>
            <p>{day5}</p>
            <p>{morning5}</p>
            <p>{evening5}</p>
            <p>{night5}</p>
          </div>
        </div>

        {/* day6 */}
        <div className="daily-handle">
          <div className="img-data">
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt=""
            />
          </div>
          <div className="text-data">
            <h3 className="week-day">Friday</h3>
            <p>{day6}</p>
            <p>{morning6}</p>
            <p>{evening6}</p>
            <p>{night6}</p>
          </div>
        </div>

        {/* day7 */}
        <div className="daily-handle">
          <div className="img-data">
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt=""
            />
          </div>
          <div className="text-data">
            <h3 className="week-day">Saturday</h3>
            <p>{day7}</p>
            <p>{morning7}</p>
            <p>{evening7}</p>
            <p>{night7}</p>
          </div>
        </div>

        {/* day8 */}
        <div className="daily-handle">
          <div className="img-data">
            <img
              src="https://i.pinimg.com/originals/77/0b/80/770b805d5c99c7931366c2e84e88f251.png"
              alt=""
            />
          </div>
          <div className="text-data">
            <h3 className="week-day">Sunday</h3>
            <p>{day8}</p>
            <p>{morning8}</p>
            <p>{evening8}</p>
            <p>{night8}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Weather;
