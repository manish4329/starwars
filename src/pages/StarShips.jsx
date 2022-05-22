import React from 'react'
import { Box, Card, Grid } from '@mui/material';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Footer from '../components/Footer';

export const StarShips = ({data}) => {
  return (
    <>
      <Box>
        <NavBar/>
        <SideBar/>
        <h1>Starships</h1>
        <Grid columns={3}>
          {data.map((starships, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{starships.name}</Card.Header>
                    <Card.Description>
                      <strong>Model:</strong>
                      <p>{starships.model}</p>
                      <strong>Class:</strong>
                      <p>{starships.starship_class}</p>
                      <strong>Manufacturer:</strong>
                      <p>{starships.manufacturer}</p>
                      <strong>Cost(Galactic credits):</strong>
                      <p>{starships.cost_in_credits}</p>
                      <strong>Length:</strong>
                      <p>{starships.length}</p>
                      <strong>Crew:</strong>
                      <p>{starships.crew}</p>
                      <strong>Hyperdrive:</strong>
                      <p>{starships.hyperdrive_rating}</p>
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

export default StarShips
