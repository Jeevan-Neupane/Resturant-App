import React from 'react'
import Layout from '../Components/Layout'
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import { Call, Mail, SupportAgent } from '@mui/icons-material'

function ContactPage() {
  return (
    <Layout>
     <Box sx={{p:3,mt:4,}}>
      <Typography variant='h4'>Contact To My Resturant</Typography>
      <Typography sx={{mt:2,fontWeight:'400',fontSize:'20px',}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut repellat dolore, laudantium placeat dolorum ad sapiente labore rem sunt, ducimus ipsa et facilis deserunt quae quis veritatis tempore quia obcaecati. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis accusantium cumque asperiores culpa dolore sint ducimus possimus. Repudiandae hic nulla, perferendis iusto saepe enim aliquid error recusandae, possimus eveniet nam.</Typography>
     </Box>
     <Box sx={{m:3,width:{sm:'600px'}}}>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell sx={{backgroundColor:"black",color:"white"}} align='center'>Contact Details</TableCell>
            </TableRow>

          </TableHead>
          <TableBody>
            <TableRow >
              <TableCell><SupportAgent color='error'sx={{pt:1}}/>123 1660019876</TableCell>
            </TableRow>
            <TableRow>
              <TableCell><Mail sx={{color:'skyblue',pt:1}}/>jeevan.neupane003@gmail.com</TableCell>

            </TableRow>
            <TableRow>
              <TableCell><Call sx={{color:'green',pt:1}}/>9745956296</TableCell>

            </TableRow>

          </TableBody>
        </Table>

      </TableContainer>
     </Box>
    </Layout>
  )
}

export default ContactPage
