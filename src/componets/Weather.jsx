import React, {useRef, useState } from "react";
import "./Weather.css";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, registerables } from "chart.js";
ChartJS.register(...registerables);
function Weather() {
  const textinput = useRef();
  const [weather, setWeather] = useState([]);
  const [humidity, setHumidity] = useState("0");
  const [temp, setTemp] = useState("0");
  const [pressure, setPressure] = useState("0");
  const [sunrise, setSunrise] = useState("00:00:00");
  const [sunset, setSunset] = useState("00:00:00");
  // state for day1
  const [morning, setMorning] = useState(5);
  const [evening, setEvening] = useState(3);

  // state for day2
  const [morning2, setMorning2] = useState(2);
  const [evening2, setEvening2] = useState(0);

  // state for day3
  const [morning3, setMorning3] = useState(5);
  const [evening3, setEvening3] = useState(0);

  // state for day 4
  const [morning4, setMorning4] = useState(2);
  const [evening4, setEvening4] = useState(0);

  // state for day 5
  const [morning5, setMorning5] = useState(5);
  const [evening5, setEvening5] = useState(3);

  // state for day 6
  const [morning6, setMorning6] = useState(2);
  const [evening6, setEvening6] = useState(0);

  // state for day 7
  const [morning7, setMorning7] = useState(5);
  const [evening7, setEvening7] = useState(3);

  // state for day 8
  const [morning8, setMorning8] = useState(2);
  const [evening8, setEvening8] = useState(3);

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
    console.log(weather)
    setTemp(data.current.temp);
    setHumidity(data.current.humidity);
    setPressure(data.current.pressure);
    setSunrise(new Date(data.current.sunrise * 1000).getHours());
    setSunset(new Date(data.current.sunset * 1000).getHours());

    // data for day1 one only

    setMorning(data.daily[0].feels_like.morn);
    setEvening(data.daily[0].feels_like.eve);
    // data for day2
    setMorning2(data.daily[1].feels_like.morn);
    setEvening2(data.daily[1].feels_like.eve);

    // data for day 3
    setMorning3(data.daily[2].feels_like.morn);
    setEvening3(data.daily[2].feels_like.eve);

    // data for day 4
    setMorning4(data.daily[3].feels_like.morn);
    setEvening4(data.daily[3].feels_like.eve);

    // data for day 5
    setMorning5(data.daily[4].feels_like.morn);
    setEvening5(data.daily[4].feels_like.eve);

    // data for day 6
    setMorning6(data.daily[5].feels_like.morn);
    setEvening6(data.daily[5].feels_like.eve);

    // data for day 7
    setMorning7(data.daily[6].feels_like.morn);
    setEvening7(data.daily[6].feels_like.eve);

    // data for day 8
    setMorning8(data.daily[7].feels_like.morn);
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
  //console.log(time);
  //console.log(date);

  // chart implementation 
  const state = {
    labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Temprature of week °C",
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [
          morning,
          morning2,
          morning3,
          morning4,
          morning5,
          morning6,
          morning7,
          morning8,
        ],
      },
    ],
  };

  return (
    <div className="body">
      <div className="top-div">
        <div className="input-button">
          <img
            src="https://cdn-icons-png.flaticon.com/512/447/447031.png"
            alt=""
            className="top-image"
          />
          <input
            ref={textinput}
            type="text"
            placeholder="search your favourite city here"
          />
          <img
            src="https://cdn-icons-png.flaticon.com/512/622/622669.png"
            alt=""
            className="top-image"
            onClick={hanleInput}
          />
        </div>
      </div>

      <div className="daily-card">
        {/* day1 */}
        <div className="daily-handle">
          <h3 className="week-day">Sun</h3>
          <div className="text-data">
            <p>{morning + "°"}</p>
            <p>{evening + "°"}</p>
          </div>
          <div className="img-data">
            <img
              src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
              alt=""
            />
          </div>
          <h3 className="week-day">Clouds</h3>
        </div>

        {/* day2 */}
        <div className="daily-handle">
          <h3 className="week-day">Mon</h3>
          <div className="text-data">
            <p>{morning2 + "°"}</p>
            <p>{evening2 + "°"}</p>
          </div>
          <div className="img-data">
            <img
              src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
              alt=""
            />
          </div>
          <h3 className="week-day">Clouds</h3>
        </div>

        {/* day3 */}
        <div className="daily-handle">
          <h3 className="week-day">Tue</h3>
          <div className="text-data">
            <p>{morning3 + "°"}</p>
            <p>{evening3 + "°"}</p>
          </div>
          <div className="img-data">
            <img
              src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
              alt=""
            />
          </div>
          <h3 className="week-day">Clouds</h3>
        </div>

        {/* day4 */}
        <div className="daily-handle">
          <h3 className="week-day">Wed</h3>
          <div className="text-data">
            <p>{morning4 + "°"}</p>
            <p>{evening4 + "°"}</p>
          </div>
          <div className="img-data">
            <img
              src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
              alt=""
            />
          </div>
          <h3 className="week-day">Clouds</h3>
        </div>

        {/* day5 */}
        <div className="daily-handle">
          <h3 className="week-day">Thu</h3>
          <div className="text-data">
            <p>{morning5 + "°"}</p>
            <p>{evening5 + "°"}</p>
          </div>
          <div className="img-data">
            <img
              src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
              alt=""
            />
          </div>
          <h3 className="week-day">Clouds</h3>
        </div>

        {/* day6 */}
        <div className="daily-handle">
          <h3 className="week-day">Fri</h3>
          <div className="text-data">
            <p>{morning6 + "°"}</p>
            <p>{evening6 + "°"}</p>
          </div>
          <div className="img-data">
            <img
              src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
              alt=""
            />
          </div>
          <h3 className="week-day">Clouds</h3>
        </div>

        {/* day7 */}
        <div className="daily-handle">
          <h3 className="week-day">Sat</h3>
          <div className="text-data">
            <p>{morning7 + "°"}</p>
            <p>{evening7 + "°"}</p>
          </div>
          <div className="img-data">
            <img
              src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
              alt=""
            />
          </div>
          <h3 className="week-day">Clouds</h3>
        </div>

        {/* day8 */}
        <div className="daily-handle">
          <h3 className="week-day">Sun</h3>
          <div className="text-data">
            <p>{morning8 + "°"}</p>
            <p>{evening8 + "°"}</p>
          </div>
          <div className="img-data">
            <img
              src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
              alt=""
            />
          </div>
          <h3 className="week-day">Clouds</h3>
        </div>
      </div>

      <div className="temp-div">
        <div className="temp-text">
          <h1>{temp + "°C"}</h1>
        </div>
        <div className="temp-img">
          <img
            src="https://www.quillproject.net/resources/resources_collection_image/57/3145"
            alt=""
          />
        </div>
        <div className="date-time">
          <h3>{time}</h3>
          <h3>{date}</h3>
        </div>
      </div>

      <div className="chart-div">
        <div>
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: "Average Temprature per week",
                fontSize: 20,
              },
              legend: {
                display: true,
                position: "right",
              },
            }}
          />
        </div>
      </div>

      <div className="pressure-humidity">
        <div className="presure">
          <h5>Pressure</h5>
          <h5>{pressure + "hpa"}</h5>
        </div>
        <div className="humidity">
          <h5>Humidity</h5>
          <h5>{humidity + "%"}</h5>
        </div>
      </div>

      <div className="pressure-humidity">
        <div className="presure">
          <h5>Sunrise</h5>
          <h5>{sunrise + "am"}</h5>
          <img
            src="https://cdn-icons-png.flaticon.com/512/1163/1163661.png"
            alt=""
          />
        </div>
        <div className="humidity">
          <h5>Sunset</h5>
          <h5>{sunset + "pm"}</h5>
          <img
            src="https://icons-for-free.com/download-icon-sun+sunset+weather+icon-1320196636209475292_512.png"
            alt=""
          />
        </div>
      </div>

      <div className="map">
        <div id="dis1"></div>
      </div>
    </div>
  );
}

export default Weather;
