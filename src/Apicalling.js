import { getCurrentLocalTime } from "./convertTime";
  const url1 = "https://api.openweathermap.org/geo/1.0/direct";
  const url2 = "https://api.openweathermap.org/data/2.5/weather";
  const key = "d769859e24d3f93874c699b1b260056b";

  export async function getWeatherdata(city) {
    try {
      let res = await fetch(`${url1}?q=${encodeURIComponent(city)}&limit=1&appid=${key}`);
      if (!res.ok) {
        throw new Error(`Location request failed: ${res.status}`);
      }

      let resjson = await res.json();
      console.log(resjson);

      if (resjson.length > 0) {
        let { lat, lon } = resjson[0];
        console.log(`Coordinates: ${lat}, ${lon}`);

        let weatherRes = await fetch(
          `${url2}?lat=${lat}&lon=${lon}&appid=${key}&units=metric`,
        );
        if (!weatherRes.ok) {
          throw new Error(`Weather request failed: ${weatherRes.status}`);
        }

        let weatherData = await weatherRes.json();
        console.log(weatherData);
        let result = {
          city: weatherData.name,
          Country: weatherData.sys.country,
          feels_like: weatherData.main.feels_like,
          humidity: weatherData.main.humidity,
          temp: weatherData.main.temp,
          temp_max: weatherData.main.temp_max,
          temp_min: weatherData.main.temp_min,
          pressure: weatherData.main.pressure,
          description: weatherData.weather[0].description,
          visibility:weatherData.visibility,
          time:weatherData.timezone,
          wind:weatherData.wind.speed,
          lat:weatherData.coord.lat,
          lon:weatherData.coord.lon,
        };
        return {success:true,  result,isCityfound:true};
      } else {
        return {success:true,result:{},isCityfound:false};
      }
    } catch (err) {
      return {success:false,err};
      
    }
  }
