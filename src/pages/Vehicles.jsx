import React from 'react'
import { Box, Card, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

export const Vehicles = ({data}) => {
  return (
    <>
      <Box>
        <NavBar/>
        <SideBar/>
        <h1>Vehicles</h1>
        <Grid columns={3}>
          {data.map((vehicles, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{vehicles.name}</Card.Header>
                    <Card.Description>
                      <strong>Model:</strong>
                      <p>{vehicles.model}</p>
                      <strong>Class:</strong>
                      <p>{vehicles.vehicle_class}</p>
                      <strong>Manufacturer:</strong>
                      <p>{vehicles.manufacturer}</p>
                      <strong>Length:</strong>
                      <p>{vehicles.length}</p>
                      <strong>Speed:</strong>
                      <p>{vehicles.max_atmosphering_speed}</p>
                      <strong>Cost(Galactic credits):</strong>
                      <p>{vehicles.cost_in_credits}</p>
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

export default Vehicles