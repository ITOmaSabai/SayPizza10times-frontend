import { Box, Button, Typography } from "@mui/material"
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const styleForBgImage = {
  backgroundImage: "url('/smile.png')",
  height: '80vh',
  width: "320px",
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundColor: "rgba(255,255,255,0.3)",
  backgroundBlendMode: "lighten",
};

export const HeroLayout = () => {
  const navigate = useNavigate();
  const [ pizzaCount, setPizzaCount ] = useState(0);
  const [ pizzas, setPizzas ] = useState([]);
  const [ disabled, setDisabled ] = useState(false)

  const handleClick = () => {
    setPizzaCount(pizzaCount + 1);
    setPizzas([...pizzas, "ピザ！"]);
    if (pizzaCount === 9) {
      setDisabled(true);
      setTimeout(() => {
        navigate('/game');
      }, 500)
    }
  }

  return (
    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center"}} >
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "90vh", width: "320px", pt: 2}} >
        <Typography variant="h3" fontWeight="bold" >ピザって10回</Typography>
        <Typography variant="h3" fontWeight="bold" >言って？</Typography>
        <Typography fontSize="12px" >(ボタンを押してください)</Typography>
          <Box sx={styleForBgImage} >
            <Box sx={{bgcolor: "rgba(255,255,255,0.3)"}} >
            </Box>
            <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="center" height="40%" >
              {pizzas.length > 0 && pizzas.map(pizza => (
                <Box p={1}>
                  <Typography variant="h4" fontWeight="bold" >{pizza}</Typography>
                </Box>
              ))}
            </Box>
          </Box>
          <Button color="info" variant="contained" onClick={handleClick} sx={{mt: 1}} disabled={disabled}  ><Typography variant="h3" >ピザ</Typography></Button>
      </Box>
    </Box>
  )
}