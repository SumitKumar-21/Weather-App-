import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSistrix } from '@fortawesome/free-brands-svg-icons';
import Button from 'react-bootstrap/Button';

export default function Form({formSubmit,inputChange}) {
  return (
    <form onSubmit={formSubmit} >
 <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
        <input
          type="text"
          placeholder="Search For city"
          style={{
            width: '300px',
            padding: '10px',
            backgroundColor: 'white',
            color: 'black',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }} onChange={inputChange}
        />
        <Button type='submit' variant="success" >
         {/* <FontAwesomeIcon icon={byPrefixAndName.fab['sistrix']}/> */}
         <FontAwesomeIcon icon={faSistrix} />
         Search
        </Button>
      </div>
    </div>
    </form>
   
  );
}
