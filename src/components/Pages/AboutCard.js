import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';

export default function AboutCard() {
  const [value, setValue] = React.useState(0);


  return (
    <Box sx={{ width: '100%', bgcolor: 'black', padding:"15px" }}>
      <Tabs value={value} onChange={(event, newValue) => setValue(newValue)} centered>
        <Tab sx={{color:"#e63900", fontWeight:"bold", fontSize: "18px", padding: "9px", marginRight: "20px" }} label="About Us" />
        <Tab sx={{color:"#e63900", fontWeight:"bold", fontSize: "18px", padding: "9px" }} label="Why choose us" />
      </Tabs>
      {(value) ?
       <div className='text-white'>
            <h3>Tempor erat elitr at rebum at at clita aliquyam consetetur. Diam dolor diam ipsum et, tempor voluptua sit consetetur sit. Aliquyam diam amet diam et eos sadipscing labore. Clita erat ipsum et lorem et sit, sed stet no labore lorem sit. Sanctus clita duo justo et tempor consetetur takimata eirmod, dolores takimata consetetur invidunt magna dolores aliquyam dolores dolore. Amet erat amet et magna</h3>
      </div>
         : 
         <div className='text-white'>
            <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint illum voluptatum ut totam laborum! Sapiente, sunt! Id, nemo ipsa, consequatur, voluptate autem ducimus unde placeat dolor commodi beatae eum cupiditate.</h3>
        </div>
        }
    </Box>
  );
}