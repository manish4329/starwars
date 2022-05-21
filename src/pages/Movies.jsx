import React from 'react';
import {Box, Grid, Card } from "@mui/material";
export const Movies = ({data}) => {
  return (
    <>
      <Box>
        <h1>Movies</h1>
        <Grid columns={3}>
          {data.map((movies, i) => {
            return (
              <Grid.Column key={i}>
                <Card>
                  <Card.Content>
                    <Card.Header>{movies.title}</Card.Header>
                    <Card.Description>
                      <strong>Episode:</strong>
                      <p>{movies.episode_id}</p>
                      <strong>Opening:</strong>
                      <p>{movies.opening_crawl}</p>
                      <strong>Director:</strong>
                      <p>{movies.director}</p>
                      <strong>Producer:</strong>
                      <p>{movies.producer}</p>
                      <strong>Release Date:</strong>
                      <p>{movies.release_date}</p>
                    </Card.Description>
                  </Card.Content>
                </Card>
              </Grid.Column>
            );
          })}
        </Grid>
      </Box>
    </>
  );
};

