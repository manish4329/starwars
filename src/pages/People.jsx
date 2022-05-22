import { Box, Card, Grid } from '@mui/material';
import React from 'react'
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';

export const People = ({data}) => {
  return (
    <>
      <Box>
        <NavBar/>
        <SideBar/>
        <h1>People</h1>
        <Grid columns={3}>
          {data.map((people, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{people.name}</Card.Header>
                    <Card.Description>
                      <strong>DOB:</strong>
                      <p>{people.birth_year}</p>
                      <strong>Eyes color:</strong>
                      <p>{people.eye_color}</p>
                      <strong>Gender:</strong>
                      <p>{people.gender}</p>
                      <strong>Height:</strong>
                      <p>{people.height}</p>
                      <strong>Mass:</strong>
                      <p>{people.mass}</p>
                      <strong>Skin color:</strong>
                      <p>{people.skin_color}</p>
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

export default People
