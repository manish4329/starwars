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
import { Route, Router, Routes } from "react-router-dom";
import { Link as RouterLink } from "react-router-dom";
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
              <ListItemButton component={RouterLink} to={"/"}>
                <ListItemIcon>
                  <Cottage />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to={"/movies"}>
                <ListItemIcon>
                  <Movie />
                </ListItemIcon>
                <ListItemText primary="Movies" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to={"/people"}>
                <ListItemIcon>
                  <PeopleAlt />
                </ListItemIcon>
                <ListItemText primary="People" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to={"/planets"}>
                <ListItemIcon>
                  <TravelExplore />
                </ListItemIcon>
                <ListItemText primary="Planets" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to={"/species"}>
                <ListItemIcon>
                  <Psychology />
                </ListItemIcon>
                <ListItemText primary="Species" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to={"/starships"}>
                <ListItemIcon>
                  <RocketLaunch />
                </ListItemIcon>
                <ListItemText primary="StarShips" />
              </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
              <ListItemButton component={RouterLink} to={"/vehicles"}>
                <ListItemIcon>
                  <DirectionsCar />
                </ListItemIcon>
                <ListItemText primary="Vehicles" />
              </ListItemButton>
            </ListItem>
          </List>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/movies" element={<Movies data={movies}/>}/>
            <Route exact path="/peoples" element={<People data={people} />} />
            <Route exact path="/planets" element={<Planets data={planets}/>} />
            <Route exact path="/species" element={<Species data={species}/>} />
            <Route exact path="/starships" element={<StarShips data={starships}/>} />
            <Route exact path="/vehicles" element={<Vehicles data={vehicles}/>} />
          </Routes>
        </Router>
      </Box>
    </Box>
  );
};

export default SideBar;