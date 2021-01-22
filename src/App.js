import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import Map from "./components/Map/Map";
import TopBar from "./components/TopBar/TopBar";
import Results from "./components/Results/Results";
import Footer from "./components/Footer/Footer";

const location = {
  address: "1600 Amphitheatre Parkway, Mountain View, california.",
  lat: 37.42216,
  lng: -122.08427,
};

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Album() {
  return (
    <React.Fragment>
      <CssBaseline />
      <TopBar />
      <main>
        <Map location={location} zoomLevel={17} />
        <Results cards={cards} />
      </main>
      <Footer />
    </React.Fragment>
  );
}
