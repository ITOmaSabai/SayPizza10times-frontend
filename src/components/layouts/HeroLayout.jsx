import { Box, Button, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const styleForHero = {
  backgroundImage: "url('/Hero.png')",
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: "rgba(255,255,255,0.6)",
  backgroundBlendMode: "lighten"
};

export const HeroLayout = () => {
  const navigate = useNavigate();
  const [ pizzaCount, setPizzaCount ] = useState(0);

  const handleClick = () => {
    setPizzaCount(pizzaCount + 1);
    if (pizzaCount === 10) {
      navigate('/game');
    }
  }

  return (
    <Box sx={styleForHero}>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", gap: 2}}>
        <Typography variant="h2" >ピザって10回言って！</Typography>
        <Button color="info" variant="contained" onClick={handleClick} >ピザ</Button>
      </Box>
    </Box>
  )
}