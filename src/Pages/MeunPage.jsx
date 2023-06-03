import React from "react";
import Layout from "../Components/Layout";
import { MenuList } from "../Data/data";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Divider
} from "@mui/material";

function MeunPage() {
  return (
    <Layout>
      <Typography variant="h2" gutterBottom sx={{textAlign:'center',mt:2,fontWeight:600}}>Order Now</Typography>
      <Divider sx={{mb:2}}/>
      <Box sx={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}} >
        {MenuList.map((item) => {
          return (
            <Card sx={{maxWidth:'350px'}}>
              <CardMedia
                src={item.image}
                sx={{ minHeight: "400px" }}
                component="img"
                alt={item.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="success" variant="contained">Order Now</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
      <Divider sx={{mb:2,mt:2}}/>
    </Layout>
  );
}

export default MeunPage;
