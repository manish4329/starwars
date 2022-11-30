import React from 'react'
import {Box, Grid, Card } from "@mui/material";

const Movies = ({ movies }) => {
  console.log(movies);
  return (
    <Box>
        <h1>Movies</h1>
        <Grid columns={3}>
          {movies.map((movie, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{movie.title}</Card.Header>
                    <Card.Description>
                      <strong>Episode:</strong>
                      <p>{movie.episode_id}</p>
                      <strong>Opening:</strong>
                      <p>{movie.opening_crawl}</p>
                      <strong>Director:</strong>
                      <p>{movie.director}</p>
                      <strong>Producer:</strong>
                      <p>{movie.producer}</p>
                      <strong>Release Date:</strong>
                      <p>{movie.release_date}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
      </Box>
  )
}

export default Movies;





