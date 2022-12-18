import { useState } from "react";
import {
  PLANETS,
  PLANETS_ARRAY,
  getDistanceBetweenAnyTwoPlanets,
  getTravelTime,
  TRAVEL_METHODS,
  FACTS,
} from "../utils/planets";
import {
  RadioGroup,
  DescriptionList,
  Dropdown,
  Card,
  Visualiser,
} from "../components";

const Home = () => {
  const [fromPlanet, setFromPlanet] = useState(PLANETS.MERCURY);
  const [toPlanet, setToPlanet] = useState(PLANETS.VENUS);
  const [selectedSpeed, setSelectedSpeed] = useState(TRAVEL_METHODS.WALK.SPEED);

  const formatTravelTime = (
    travelMethod: "hours" | "days" | "weeks" | "months" | "years"
  ) => {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 2,
    }).format(getTravelTime(fromPlanet, toPlanet, selectedSpeed)[travelMethod]);
  };

  const organisePlanetsForRadioGroup = () => {
    return PLANETS_ARRAY.map((planet) => ({
      label: planet,
      value: planet,
    }));
  };

  const organiseTravelSpeedsForRadioGroup = () => {
    return Object.entries(TRAVEL_METHODS).map((entry) => ({
      label: entry[0],
      value: entry[1].SPEED,
      icon: entry[1].ICON,
    }));
  };

  const getSelectedPlanetsInOrder = () => {
    const fromPlanetIndex = PLANETS_ARRAY.indexOf(fromPlanet);
    const toPlanetIndex = PLANETS_ARRAY.indexOf(toPlanet);
    return fromPlanetIndex < toPlanetIndex
      ? [fromPlanet, toPlanet]
      : [toPlanet, fromPlanet];
  };

  const getDescriptionListItems = () => [
    {
      label: "Hours",
      value: formatTravelTime("hours"),
    },
    {
      label: "Days",
      value: formatTravelTime("days"),
    },
    {
      label: "Weeks",
      value: formatTravelTime("weeks"),
    },
    {
      label: "Months",
      value: formatTravelTime("months"),
    },
    {
      label: "Years",
      value: formatTravelTime("years"),
    },
  ];

  const getTravelMethodFromSpeed = (speed: number) => {
    return Object.entries(TRAVEL_METHODS).find(
      (entry) => entry[1].SPEED === speed
    )?.[0];
  };

  return (
    <main>
      <Card className="mb-5">
        <DescriptionList
          items={getDescriptionListItems()}
          title={`${fromPlanet} to ${toPlanet}`}
          description={`Average ${getTravelMethodFromSpeed(
            selectedSpeed
          )} speed: ${selectedSpeed} km/h`}
        />
      </Card>
      <section className="mb-5">
        <RadioGroup
          options={organiseTravelSpeedsForRadioGroup()}
          selectedOption={selectedSpeed}
          setSelectedOption={setSelectedSpeed}
        />
      </section>
      <section className="flex mb-10 justify-between">
        <Dropdown
          options={organisePlanetsForRadioGroup()}
          selectedOption={fromPlanet}
          setSelectedOption={setFromPlanet}
          disabledItems={[toPlanet]}
        />
        <span className="text-5xl">&rarr;</span>
        <Dropdown
          options={organisePlanetsForRadioGroup()}
          selectedOption={toPlanet}
          setSelectedOption={setToPlanet}
          disabledItems={[fromPlanet]}
          type="secondary"
        />
      </section>
      <section>
        <Visualiser toPlanet={toPlanet} fromPlanet={fromPlanet} />
      </section>
    </main>
  );
};

export default Home;
