import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }}  >
      <AppBar position="sticky" color="transparent" >
        <Toolbar >
          <IconButton
            size="larger"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon style={{color:"white",fontSize:35, }} />
          </IconButton>
          <Typography variant="h4" component="div" sx={{ flexGrow: 1,color:'white' }} align='left'  >
            Weather Data 
          </Typography>
          <Button color="primary" variant='outlined' sx={{fontWeight:"bold",color:"white"}}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
