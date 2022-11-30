import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const Species = ({species}) => {
  return (
    <Box>
        <NavBar/>
        <SideBar/>
        <h1>Species</h1>
        <Grid columns={3}>
          {species.map((specie, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{specie.name}</Card.Header>
                    <Card.Description>
                      <strong>Classification:</strong>
                      <p>{specie.classification}</p>
                      <strong>Designation:</strong>
                      <p>{specie.designation}</p>
                      <strong>Average Height:</strong>
                      <p>{specie.average_height}</p>
                      <strong>Average Lifespan:</strong>
                      <p>{specie.average_lifespan}</p>
                      <strong>Language:</strong>
                      <p>{specie.language}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
        <Footer/>
      </Box>
  )
}

export default Species;




