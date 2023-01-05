import React from "react";
import { Button } from "react-bootstrap";

const WeatherButton = () => {
  return (
    <div>
      <Button variant="warning">CurrentLocation</Button>
      <Button variant="warning">Dublin</Button>
      <Button variant="warning">Paris</Button>
      <Button variant="warning">Prague</Button>
      <Button variant="warning">London</Button>
    </div>
  );
};

export default WeatherButton;
