import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import FeatureImage from './WeatherImage';
import Feature from './WeatherFeature';
import { getCurrentLocalTime } from './convertTime';
import Map from './map.jsx'
import './Display.css'
import { getImageUrl } from './ImageBasedontemp.js';

export default function Display({arr,reset}) {
        let rain="https://i.pinimg.com/1200x/a8/d4/d8/a8d4d8ed53dee2be7561cc53c91beb70.jpg";
        let LocalTime= getCurrentLocalTime(arr.time);
        console.log(LocalTime);
        let {url,icon} = getImageUrl(arr);
        let imageDetail= {temp:arr.temp,feelsLike:arr.feels_like,description:arr.description, url:url,icon:icon, time:LocalTime};
  return (
    <>
    <div  className='mainDiv'>
  <div className='imageDiv'>
<FeatureImage data={imageDetail} ></FeatureImage>
  </div>
  <div className='featureDiv'>
<Feature feature={{name:"Temp min",value:arr.temp_min,unit:`°C`}}></Feature>
<Feature feature={{name:"Temp max",value:arr.temp_max,unit:`°C`}}></Feature>
<Feature feature={{name:"Humidity",value:arr.humidity,unit:"%"}} ></Feature>
<Feature feature={{name:"Wind",value:arr.wind,unit:"m/s"}}></Feature>
<Feature feature={{name:"Pressure",value:arr.pressure,unit:"hPa"}}></Feature>
<Feature feature={{name:"Visibility",value:arr.visibility,unit:"km"}}></Feature>
  </div>
    </div>
{/* <div>
  <Map lat={arr.lat} lon={arr.lon}></Map>
</div> */}
    </>
    
  );
}
