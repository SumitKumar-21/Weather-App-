import Typography from '@mui/material/Typography';
export default  function Feature({feature}) {

  return (
    <div style={{
      border: "1px solid black", width: "142px", height: "70px", backgroundColor: "#F1E2D1", borderRadius: "10px", color:"#541A1A" ,fontFamily:"sans serif"}}>
      <Typography variant="Caption" component="p" sx={{ textAlign: "center", fontWeight: "bolder", marginTop:"10px",fontSize:"1.2rem" }} >{feature.name} </Typography>
      <Typography variant="Caption" component="p" sx={{ textAlign: "center", fontWeight: "light", fontSize: "0.9rem"  }} > {feature.value} {feature.unit} </Typography>
   </div>
  );
}
