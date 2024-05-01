import { Box, Button, Typography } from "@mui/material"

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
  return (
    <Box sx={styleForHero}>
      <Box sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", height: "100%", gap: 2}}>
        <Typography variant="h2" >ピザって10回言って！</Typography>
        <Button color="info" variant="contained"  >ゲームスタート</Button>
      </Box>
    </Box>
  )
}