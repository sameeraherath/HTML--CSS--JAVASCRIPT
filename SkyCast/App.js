const API_KEY = "1abbaaa4fa66b600a759651a8fd1a05e";
const city = "Sri lanka";
const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

// Fetch weather data using Axios
axios
  .get(URL)
  .then((response) => {
    const data = response.data;
    const temperature = data.main.temp;
    const location = data.name;
    const description = data.weather[0].description;
    const time = moment().format("MMMM Do YYYY, h:mm:ss a");

    // Display weather data on the web page
    document.getElementById("time").innerText = `Time: ${time}`;
    document.getElementById("location").innerText = `Location: ${location}`;
    document.getElementById(
      "temperature"
    ).innerText = `Temperature: ${temperature}°C`;
    document.getElementById(
      "description"
    ).innerText = `Description: ${description}`;
  })
  .catch((error) => {
    console.log(`Error fetching weather data: ${error}`);
    document.getElementById("location").innerText =
      "Error fetching weather data";
  });
