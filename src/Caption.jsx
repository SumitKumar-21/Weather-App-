import Typography from '@mui/material/Typography';

export default function HeadCaption(){
    return(
        <Typography component={'div'} sx={{marginTop:"80px"}}>
            <Typography variant='h1' color='white' align="center" >
                 First and Fast Weather <br/> 
                  App
            </Typography>
            <br/> 
            <Typography variant='h6' color='white' align="center" sx={{color:"white" ,marginTop:"20px"}} >
              This weather app is build using openWeather free api to learn react properly. <br />
              A minor Project made by me ... <br></br>
            </Typography>
        </Typography>
    )
}