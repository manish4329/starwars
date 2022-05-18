import {
  Movie,
  TravelExplore,
  Psychology,
  RocketLaunch,
  DirectionsCar,
  Cottage,
  PeopleAlt,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useEffect, useState } from "react";
import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Movies } from "../pages/Movies";
import { People } from "../pages/People";
import { Planets } from "../pages/Planets";
import { Species } from "../pages/Species";
import { StarShips } from "../pages/StarShips";
import { Vehicles } from "../pages/Vehicles";

const SideBar = () => {
  const [movies, setMovies] = useState([]);
  const [people, setPeople] = useState([]);
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
      setPeople(data.results);
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
        <Router>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/">
                    <Cottage />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/movies">
                    <Movie />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Movies" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/people">
                    <PeopleAlt />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/planets">
                    <TravelExplore />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Planets" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/species">
                    <Psychology />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Species" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/starships">
                    <RocketLaunch />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="StarShips" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  <Link to="/vehicles">
                    <DirectionsCar />
                  </Link>
                </ListItemIcon>
                <ListItemText primary="Vehicles" />
              </ListItemButton>
            </ListItem>
          </List>
          <Routes>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/movies">
              <Movies data={movies} />
            </Route>
            <Route exact path="/peoples">
              <People data={people} />
            </Route>
            <Route exact path="/planets">
              <Planets data={planets} />
            </Route>
            <Route exact path="/species">
              <Species data={species} />
            </Route>
            <Route exact path="/starships">
              <StarShips data={starships} />
            </Route>
            <Route exact path="/vehicles">
              <Vehicles data={vehicles} />
            </Route>
          </Routes>
        </Router>
      </Box>
    </Box>
  );
};

export default SideBar;
