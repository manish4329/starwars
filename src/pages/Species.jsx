import React from 'react'
import { Box, Card, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

export const Species = ({data}) => {
  return (
    <>
      <Box>
        <NavBar/>
        <SideBar/>
        <h1>Species</h1>
        <Grid columns={3}>
          {data.map((species, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{species.name}</Card.Header>
                    <Card.Description>
                      <strong>Classification:</strong>
                      <p>{species.classification}</p>
                      <strong>Designation:</strong>
                      <p>{species.designation}</p>
                      <strong>Average Height:</strong>
                      <p>{species.average_height}</p>
                      <strong>Average Lifespan:</strong>
                      <p>{species.average_lifespan}</p>
                      <strong>Language:</strong>
                      <p>{species.language}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
        <Footer/>
      </Box>
    </>
  )
}

export default Species