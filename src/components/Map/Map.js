import React from "react";
import GoogleMapReact from "google-map-react";
import { Icon } from "@iconify/react";
import locationIcon from "@iconify/icons-mdi/map-marker";
import "./Map.css";

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={locationIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
);

export default function Map(props) {
  return (
    <div className="map">
      <div className="google-map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_API_KEY }}
          defaultCenter={props.location}
          defaultZoom={props.zoomLevel}
        >
          <LocationPin
            lat={props.location.lat}
            lng={props.location.lng}
            text={props.location.address}
          />
        </GoogleMapReact>
      </div>
    </div>
  );
}
