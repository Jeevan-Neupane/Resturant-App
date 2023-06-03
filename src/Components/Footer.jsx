import { Box, Typography } from "@mui/material";
import { Instagram, Twitter, GitHub, YouTube } from "@mui/icons-material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", bgcolor: "#1a1a19", color: "white" }} p={3}>
      <Box
        my={2}
        sx={{
          "& svg": {
            fontSize: {xs:'30px',sm:'40px'},
            cursor: "pointer",
            mr: 2,
          },
          "& svg:hover": {
            transform: "scale(1.1)",
            color:"goldenrod",
            transition:"all .4s "
          },
          
        }}
      >
        <Instagram />
        <Twitter />
        <GitHub />
        <YouTube />
      </Box>
      <Typography
        variant="h5"
        sx={{
          "@media(max-width:600px)": {
            fontSize: "1rem",
          },
        }}
      >
        All right Reserved &copy; Jeevan Neupane
      </Typography>
    </Box>
  );
}

export default Footer;
