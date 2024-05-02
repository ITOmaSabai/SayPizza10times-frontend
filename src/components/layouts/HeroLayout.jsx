import { Box, Button, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const styleForHero = {
  height: '100vh',
}

const styleForQuizFailure = {
  backgroundImage: "url('/smile.png')",
  height: '100%',
  width: "100%",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: "rgba(255,255,255,0.3)",
  backgroundBlendMode: "lighten"
};

export const HeroLayout = () => {
  const navigate = useNavigate();
  const [ pizzaCount, setPizzaCount ] = useState(0);
  const [ pizzas, setPizzas ] = useState([]);

  const handleClick = () => {
    setPizzaCount(pizzaCount + 1);
    setPizzas([...pizzas, "ピザ！"]);
    if (pizzaCount === 10) {
      navigate('/game');
    }
  }

  return (
    <Box sx={styleForHero}>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center", height: "100%", gap: 2}}>
        <Box sx={styleForQuizFailure} >
          <Box sx={{bgcolor: "rgba(255,255,255,0.3)"}} >
            <Typography variant="h3" fontWeight="bold" >ピザって10回言って？</Typography>
          </Box>
          <Box display="flex" flexDirection="row" flexWrap="wrap" height="100%" >
            {pizzas.length > 0 && pizzas.map(pizza => (
              <Box p={1}>
                <Typography variant="h5" fontWeight="bold" >{pizza}</Typography>
              </Box>
            ))}
          </Box>
        </Box>

        <Button color="info" variant="contained" onClick={handleClick} ><Typography variant="h3" >ピザ</Typography></Button>
      </Box>
    </Box>
  )
}