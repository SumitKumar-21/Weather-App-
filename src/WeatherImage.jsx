import Typography from '@mui/material/Typography';
 export default function FeatureImage({data}) {
  return (
    <div
      style={{
        border: "1px solid black",
        width: "450px",
        height: "300px",
        backgroundImage: `url(${data.url})`,
        backgroundSize: "cover",
        backgroundPosition: "right",
        borderRadius: "18px",
        color: "#541A1A",
        paddingLeft:"10px",
        paddingRight: "10px"
      }}
    >
      <Typography variant="Caption" component="span" sx={{display:"block", color: "white", fontWeight: "bold", textAlign: "center",marginLeft:"310px",marginTop:"20px",fontSize:"1.3rem" }} >
     {data.time}</Typography>
    <div style={{display:"flex", justifyContent:"space-between" , height:"auto",marginTop:"180px"}}> 
        <Typography variant="h2" component="span" sx={{ color: "white", fontWeight:"bold" }} >{data.temp}&deg; </Typography>
        <Typography variant="h6" component="span" sx={{ color: "white", fontWeight: "light", textAlign: "center" }} >
          {data.description}{data.icon}
      <br />
          Feels Like:{data.feelsLike}
       </Typography>
    </div>
     

    </div>
  );
}


