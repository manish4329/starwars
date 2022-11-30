import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const StarShips = ({starships}) => {
  return (
    <Box>
        <NavBar/>
        <SideBar/>
        <h1>Starships</h1>
        <Grid columns={3}>
          {starships.map((starship, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{starships.name}</Card.Header>
                    <Card.Description>
                      <strong>Model:</strong>
                      <p>{starship.model}</p>
                      <strong>Class:</strong>
                      <p>{starship.starship_class}</p>
                      <strong>Manufacturer:</strong>
                      <p>{starship.manufacturer}</p>
                      <strong>Cost(Galactic credits):</strong>
                      <p>{starship.cost_in_credits}</p>
                      <strong>Length:</strong>
                      <p>{starship.length}</p>
                      <strong>Crew:</strong>
                      <p>{starship.crew}</p>
                      <strong>Hyperdrive:</strong>
                      <p>{starship.hyperdrive_rating}</p>
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

export default StarShips;
