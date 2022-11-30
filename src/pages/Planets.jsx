import React from 'react';
import { Box, Card, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

const Planets = ({planets}) => {
  return (
    <Box>
        <NavBar/>
        <SideBar/>
        <h1>Planets</h1>
        <Grid columns={3}>
          {planets.map((planet, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{planets.name}</Card.Header>
                    <Card.Description>
                      <strong>Diameter:</strong>
                      <p>{planet.diameter}</p>
                      <strong>Rotation:</strong>
                      <p>{planet.rotation_period}</p>
                      <strong>Orbital Period:</strong>
                      <p>{planet.orbital_period}</p>
                      <strong>Gravity:</strong>
                      <p>{planet.gravity}</p>
                      <strong>Population:</strong>
                      <p>{planet.population}</p>
                      <strong>Climate:</strong>
                      <p>{planet.climate}</p>
                      <strong>Terrain:</strong>
                      <p>{planet.terrain}</p>
                      <strong>Surface water percentage:</strong>
                      <p>{planet.surface_water}</p>
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

export default Planets






