import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const Vehicles = ({vehicles}) => {
  return (
    <Box>
        <NavBar/>
        <SideBar/>
        <h1>Vehicles</h1>
        <Grid columns={3}>
          {vehicles.map((vehicle, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{vehicle.name}</Card.Header>
                    <Card.Description>
                      <strong>Model:</strong>
                      <p>{vehicle.model}</p>
                      <strong>Class:</strong>
                      <p>{vehicle.vehicle_class}</p>
                      <strong>Manufacturer:</strong>
                      <p>{vehicle.manufacturer}</p>
                      <strong>Length:</strong>
                      <p>{vehicle.length}</p>
                      <strong>Speed:</strong>
                      <p>{vehicle.max_atmosphering_speed}</p>
                      <strong>Cost(Galactic credits):</strong>
                      <p>{vehicle.cost_in_credits}</p>
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

export default Vehicles;

