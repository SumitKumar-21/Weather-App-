import { styled } from '@mui/material/styles';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';import Typography from '@mui/material/Typography';

const IOSSwitch = styled(Switch)(({ theme }) => ({
  width: 120,
  height: 50,
  padding: 0,

  '& .MuiSwitch-switchBase': {
    padding: 4,
    margin: 0,
    transitionDuration: '30ms',

    '&.Mui-checked': {
      transform: 'translateX(69px)',

      '& + .MuiSwitch-track': {
        opacity: 0.9,
        background: 'rgba(255, 255, 255, 0.15)',
      },
    },
  },

  '& .MuiSwitch-thumb': {
    width: 43,
    height: 43,
    borderRadius: 50,
    backgroundColor: 'whitesmoke',
    boxShadow: '0 2px 8px rgba(0,0,0,0.2)',
  },

  '& .MuiSwitch-track': {
    borderRadius: 25,
    background: 'rgba(255, 255, 255, 0.15)',
    backdropFilter: 'blur(20px)',
    WebkitBackdropFilter: 'blur(20px)',
    border: '1px solid rgba(255,255,255,0.1)',
    opacity: 1,
    position: 'relative',

    '&::before': {
      content: '"°C"',
      position: 'absolute',
      left: 20,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'black',
      fontSize: '18px',
      fontWeight: 500,
      zIndex: 1,
    },

    '&::after': {
      content: '"°F"',
      position: 'absolute',
      right: 20,
      top: '50%',
      transform: 'translateY(-50%)',
      color: 'black',
      fontSize: '18px',
      fontWeight: 500,
      zIndex: 1,
    },
  },
}));

export default function Slider() {
  return (
      <FormControlLabel
      control={<IOSSwitch sx={{ m: 1,}} defaultChecked  />}
      />
 
  );
}
