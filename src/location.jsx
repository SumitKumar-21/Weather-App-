import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faLocationCrosshairs } from '@fortawesome/free-solid-svg-icons';

export default function ShowLocation({ city, country }) {
  return (
    <span>
     <FontAwesomeIcon icon={faLocationCrosshairs} /> {city}, {country}
    </span>
  );
}
