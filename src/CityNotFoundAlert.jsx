import Alert from 'react-bootstrap/Alert';
import Typography from '@mui/material/Typography';

export default  function CityAlert() {
   return (
    <>
        <Alert key={'warning'} variant={"warning"} style={{margin:"0 auto", width:"400px", marginTop:"20px",marginButton:"10px"}} >
           <Typography variant='h4' align='center' sx={{}} >City Not Found </Typography>
        </Alert>
    </>
  );
}


