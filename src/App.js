// Libraries
import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

// Components
import Map from "./components/Map/Map";
import TopBar from "./components/TopBar/TopBar";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import Login from "./components/Login/Login";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App() {
  const [token, setToken] = useState();

  // setToken(localStorage.getItem("token"));

  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <BrowserRouter>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/preferences">
            <Preferences />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/">
            <Map location={location} zoomLevel={17} />
            <Results cards={cards} />
          </Route>
        </Switch>
      </BrowserRouter>
      <Footer />
    </React.Fragment>
  );
}
