import React from "react";
import PLANET_IMAGES from "./planetImages";
import { PLANETS_ARRAY } from "../../utils/planets";

const Visualiser = ({
  toPlanet,
  fromPlanet,
  setToPlanet,
  setFromPlanet,
  selectedSpeed,
}: {
  toPlanet: string;
  fromPlanet: string;
  selectedSpeed: number;
  setToPlanet: React.Dispatch<React.SetStateAction<string>>;
  setFromPlanet: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const checkIfPlanetIsSelected = (planet: string) => {
    return toPlanet === planet
      ? "toPlanet"
      : fromPlanet === planet
      ? "fromPlanet"
      : "";
  };

  const addClassToPlanetIfSelected = (planet: string) => {
    if (checkIfPlanetIsSelected(planet) === "toPlanet") {
      return "w-32 h-32 bg-pink-100 p-3 rounded-full";
    } else if (checkIfPlanetIsSelected(planet) === "fromPlanet") {
      return "w-32 h-32 bg-lime-100 p-3 rounded-full";
    } else {
      return "w-8 h-8";
    }
  };

  const handleToPlanetSelection = (event: React.MouseEvent, planet: string) => {
    event.preventDefault();
    if (planet === fromPlanet) return;
    setToPlanet(planet);
  };

  const handleFromPlanetSelection = (
    event: React.MouseEvent,
    planet: string
  ) => {
    event.preventDefault();
    if (planet === toPlanet) return;
    setFromPlanet(planet);
  };

  return (
    <div className="flex flex-row justify-between items-center">
      {PLANETS_ARRAY.map((planet) => (
        <span>
          <img
            key={planet}
            src={PLANET_IMAGES[planet]}
            className={`${addClassToPlanetIfSelected(planet)} cursor-pointer`}
            alt={planet}
            title={planet}
            onClick={(event) => handleFromPlanetSelection(event, planet)}
            onContextMenu={(event) => handleToPlanetSelection(event, planet)}
          />
          <p className="text-center text-sm">{planet}</p>
        </span>
      ))}
    </div>
  );
};

export default Visualiser;
