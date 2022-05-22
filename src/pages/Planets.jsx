import React from 'react'
import { Box, Card, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

export const Planets = ({data}) => {
  return (
    <>
      <Box>
        <NavBar/>
        <SideBar/>
        <h1>Planets</h1>
        <Grid columns={3}>
          {data.map((planets, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{planets.name}</Card.Header>
                    <Card.Description>
                      <strong>Diameter:</strong>
                      <p>{planets.diameter}</p>
                      <strong>Rotation:</strong>
                      <p>{planets.rotation_period}</p>
                      <strong>Orbital Period:</strong>
                      <p>{planets.orbital_period}</p>
                      <strong>Gravity:</strong>
                      <p>{planets.gravity}</p>
                      <strong>Population:</strong>
                      <p>{planets.population}</p>
                      <strong>Climate:</strong>
                      <p>{planets.climate}</p>
                      <strong>Terrain:</strong>
                      <p>{planets.terrain}</p>
                      <strong>Surface water percentage:</strong>
                      <p>{planets.surface_water}</p>
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

export default Planets
