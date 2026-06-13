import { useEffect, useState } from "react";
import "@fontsource/roboto/400.css";
import Display from "./Display";
import { getWeatherdata } from "./Apicalling";
import ErrorAlert from "./ErrorAlert";
import CityAlert from "./CityNotFoundAlert";
import Form from "./form";
import ShowLocation from "./location";
import Slider from "./slider";
import MapView from "./map.jsx";
import "./searchBox.css";

export default function SearchBox() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [isCityFound, setisCityFound] = useState(true);
  const [CheckResponse, setCheckResponse] = useState(true);
  const [updateCity, setupdateCity] = useState();
  const [updateCountry, setupdateCountry] = useState();
  const [Coords, setCoords] = useState();

  useEffect(() => {
    async function fetchData() {
      try {
        let response = await getWeatherdata("Kathmandu");
        setWeather(response.result);
        setupdateCity(response.result.city);
        setupdateCountry(response.result.Country);
        setisCityFound(response.isCityfound);
        setCoords({ lon: response.result.lon, lat: response.result.lat });
      } catch (err) {
        console.error("Error fetching weather:", err);
      }
    }

    fetchData();
  }, []);

  const handleCityChange = (evnt) => {
    setCity(evnt.target.value);
  };

  async function handleSubmit(evnt) {
    evnt.preventDefault();
    console.log("Submitted");
    let response = await getWeatherdata(city);
    setCheckResponse(response.success);
    if (response.success) {
      setWeather(response.result);
      setupdateCity(response.result.city);
      setupdateCountry(response.result.Country);
      setisCityFound(response.isCityfound);
      setCoords({ lon: response.result.lon, lat: response.result.lat });
      setCity("");
    } else {
      setWeather(response.err);
    }
  }

   const handleReset = () => {
    setWeather({});
    setisCityFound(true);
  };

  return (
    <>
      <div className="searchDiv">
        <h2>Weather Forecast</h2>
        <Slider></Slider>
        <ShowLocation city={updateCity} country={updateCountry}></ShowLocation>
        <Form formSubmit={handleSubmit} inputChange={handleCityChange}></Form>
      </div>
      {!CheckResponse ? (
        <ErrorAlert err={weather} />
      ) : !isCityFound ? (
        <CityAlert />
      ) : (
        weather.city && (
          <div style={{ display: "flex" }}>
            <Display arr={weather} reset={handleReset}></Display>
            <MapView coords={Coords}></MapView>
          </div>
        )
      )}
    </>
  );
}
