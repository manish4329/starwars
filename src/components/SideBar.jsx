import React from 'react';
import {
    Movie,
    TravelExplore,
    Psychology,
    RocketLaunch,
    DirectionsCar,
    Cottage,
    PeopleAlt,
  } from "@mui/icons-material";
  import { createBrowserHistory } from "history";
import Movies from "../pages/Movies";
import People from "../pages/People";
import Planets from "../pages/Planets";
import Species from "../pages/Species";
import StarShips from "../pages/StarShips";
import Vehicles from "../pages/Vehicles";
  import {
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Link,
  } from "@mui/material";
  import { useEffect, useState } from "react";
  import { Route, Router, Switch } from "react-router-dom";
  const history = createBrowserHistory({ window });

const SideBar = () => {
  const [movies, setMovies] = useState([]);
  const [peoples, setPeoples] = useState([]);
  const [planets, setPlanets] = useState([]);
  const [species, setSpecies] = useState([]);
  const [starships, setStarShips] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    async function fetchMovies() {
      let res = await fetch("https://swapi.dev/api/films/?format=json");
      let data = await res.json();
      setMovies(data.results);
    }
    async function fetchPeople() {
      let res = await fetch("https://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeoples(data.results);
    }
    async function fetchPlanets() {
      let res = await fetch("https://swapi.dev/api/planets/?format=json");
      let data = await res.json();
      setPlanets(data.results);
    }
    async function fetchSpecies() {
      let res = await fetch("https://swapi.dev/api/species/?format=json");
      let data = await res.json();
      setSpecies(data.results);
    }
    async function fetchStarShips() {
      let res = await fetch("https://swapi.dev/api/starships/?format=json");
      let data = await res.json();
      setStarShips(data.results);
    }
    async function fetchVehicles() {
      let res = await fetch("https://swapi.dev/api/vehicles/?format=json");
      let data = await res.json();
      setVehicles(data.results);
    }
    fetchMovies();
    fetchPeople();
    fetchPlanets();
    fetchSpecies();
    fetchStarShips();
    fetchVehicles();
  }, []);
  return (
    <Box flex={1} pt={17} sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="Static">
        <Router history={history}>
          <List>
            <ListItem  button component={Link} href="/" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <Cottage/>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem  button component={Link} href="/movies" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <Movie movies={movies} />
                </ListItemIcon>
                <ListItemText primary="Movies" />
              </ListItemButton>
            </ListItem>
            <ListItem  button component={Link} href="/people" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItemButton>
            </ListItem>
            <ListItem  button component={Link} href="/planets" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <TravelExplore />
                </ListItemIcon>
                <ListItemText primary="Planets" />
              </ListItemButton>
            </ListItem>
            <ListItem  button component={Link} href="/species" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <Psychology />
                </ListItemIcon>
                <ListItemText primary="Species" />
              </ListItemButton>
            </ListItem>
            <ListItem  button component={Link} href="/starships" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <RocketLaunch />
                </ListItemIcon>
                <ListItemText primary="StarShips" />
              </ListItemButton>
            </ListItem>
            <ListItem  button component={Link} href="/vehicles" disablePadding>
              <ListItemButton>
                <ListItemIcon>
                    <DirectionsCar />
                </ListItemIcon>
                <ListItemText primary="Vehicles" />
              </ListItemButton>
            </ListItem>
          </List>
          <Switch>
            <Route exact path="/">
            </Route>
            <Route exact path="/movies">
              <Movies movies={movies} />
            </Route>
            <Route exact path="/people">
              <People peoples={peoples} />
            </Route>
            <Route exact path="/planets">
              <Planets planets={planets} />
            </Route>
            <Route exact path="/species">
              <Species species={species} />
            </Route>
            <Route exact path="/starships">
              <StarShips starships={starships} />
            </Route>
            <Route exact path="/vehicles">
              <Vehicles vehicles={vehicles} />
            </Route>
          </Switch>
        </Router>
      </Box>
    </Box>
  )
}

export default SideBar;

