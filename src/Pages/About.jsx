import { Box, Typography } from "@mui/material";
import Layout from "../Components/Layout";

function About() {
  return (
    <Layout>
      <Box sx={{my:15,textAlign:"center",p:2,"& h4":{
        fontWeight:'bold',
      },"& p":{
        textAlign:"justify",
      }}}>
        <Typography variant="h4" mb={2} sx={{fontSize:{xs:"25px",sm:"40px"}}} >Welcome to my Resturant</Typography>
        <Typography component="p" >
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, ut
          veritatis, suscipit placeat dolorum maiores possimus laboriosam illo
          fuga libero debitis, similique itaque magni ullam deleniti amet
          officiis ab assumenda fugit neque reiciendis vel? Numquam blanditiis
          ex ab iste dolores deserunt laboriosam debitis reiciendis quasi
          provident modi, sapiente ratione ducimus dicta voluptatibus explicabo
          laborum veniam quibusdam rem velit possimus animi. Praesentium
          mollitia cum consectetur facere facilis quaerat tempora nostrum!
          Ducimus asperiores animi cumque iste tempora, repellat explicabo culpa
          atque autem ratione, tempore quibusdam eveniet! Hic neque aperiam
          facere voluptatem, harum odit modi sit odio reiciendis, officia
          deleniti eius quisquam facilis?
        </Typography>
        <br />
        <Typography component="p" >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae est,
          vero repellendus eligendi rerum labore, sapiente velit nesciunt sunt
          voluptas ipsam. Optio vero cumque, obcaecati explicabo, laborum a sint
          suscipit numquam eveniet voluptatum dolorem recusandae alias veritatis
          voluptate modi. Obcaecati at voluptatem harum ratione cum perspiciatis
          earum sit in ipsa quis voluptas repellendus, ipsam delectus inventore
          similique doloremque sint repudiandae quia, sed quod rem atque
          reprehenderit necessitatibus? Nesciunt impedit dolor odio quos error
          est omnis doloribus! Ducimus ipsum cupiditate, facilis officiis
          necessitatibus dolorum aliquid, ipsam dignissimos molestiae earum
          incidunt eligendi ullam doloremque blanditiis vel, sequi veniam nobis!
          Rem, expedita esse.
        </Typography>
      </Box>
    </Layout>
  );
}

export default About;
