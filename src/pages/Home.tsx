import { useState } from "react";
import {
  PLANETS,
  PLANETS_ARRAY,
  getDistanceBetweenAnyTwoPlanets,
  getTravelTime,
  AVERAGE_TRAVEL_SPEEDS,
  FACTS,
} from "../utils/planets";
import {
  FaBicycle,
  FaCar,
  FaLightbulb,
  FaPlane,
  FaSpaceShuttle,
  FaWalking,
} from "react-icons/fa";
import {
  RadioGroup,
  DescriptionList,
  Visualiser,
  FactList,
} from "../components";

const Home = () => {
  const [fromPlanet, setFromPlanet] = useState(PLANETS.MERCURY);
  const [toPlanet, setToPlanet] = useState(PLANETS.VENUS);
  const [selectedSpeed, setSelectedSpeed] = useState(
    AVERAGE_TRAVEL_SPEEDS.WALK
  );

  const formatTravelTime = (
    travelMethod: "hours" | "days" | "weeks" | "months" | "years"
  ) => {
    return new Intl.NumberFormat("en-US", {
      maximumFractionDigits: 2,
    }).format(getTravelTime(fromPlanet, toPlanet, selectedSpeed)[travelMethod]);
  };

  const getTransportIcon = (speed: number) => {
    switch (speed) {
      case AVERAGE_TRAVEL_SPEEDS.WALK:
        return <FaWalking />;
      case AVERAGE_TRAVEL_SPEEDS.CYCLE:
        return <FaBicycle />;
      case AVERAGE_TRAVEL_SPEEDS.DRIVE:
        return <FaCar />;
      case AVERAGE_TRAVEL_SPEEDS.FLY:
        return <FaPlane />;
      case AVERAGE_TRAVEL_SPEEDS.VOYAGER1:
        return <FaSpaceShuttle />;
      case AVERAGE_TRAVEL_SPEEDS.LIGHT:
        return <FaLightbulb />;
      default:
        return <FaWalking />;
    }
  };

  const organisePlanetsForRadioGroup = (planets: string[]) => {
    return planets.map((planet) => ({
      label: planet,
      value: planet,
    }));
  };

  const organiseTravelSpeedsForRadioGroup = () => {
    return Object.keys(AVERAGE_TRAVEL_SPEEDS).map((speed) => ({
      label: speed,
      value: AVERAGE_TRAVEL_SPEEDS[speed as keyof typeof AVERAGE_TRAVEL_SPEEDS],
      icon: getTransportIcon(
        AVERAGE_TRAVEL_SPEEDS[speed as keyof typeof AVERAGE_TRAVEL_SPEEDS]
      ),
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

  return (
    <main>
      <h1 className="text-5xl">Sol System Trip Planner</h1>
      <section className="my-10">
        <Visualiser
          toPlanet={toPlanet}
          fromPlanet={fromPlanet}
          selectedSpeed={selectedSpeed}
          setToPlanet={setToPlanet}
          setFromPlanet={setFromPlanet}
        />
      </section>
      <section className="flex gap-3 justify-between">
        <RadioGroup
          title="From"
          options={organisePlanetsForRadioGroup(PLANETS_ARRAY)}
          selectedOption={fromPlanet}
          setSelectedOption={setFromPlanet}
          disabledItems={[toPlanet]}
          baseColor="lime"
        />
        <RadioGroup
          title="To"
          options={organisePlanetsForRadioGroup(PLANETS_ARRAY)}
          selectedOption={toPlanet}
          setSelectedOption={setToPlanet}
          disabledItems={[fromPlanet]}
          baseColor="pink"
        />
        {selectedSpeed !== 0 && (
          <div className="grow">
            <DescriptionList
              title={`Travel time from ${fromPlanet} to ${toPlanet}`}
              description={`Around ${new Intl.NumberFormat("en-US").format(
                getDistanceBetweenAnyTwoPlanets(fromPlanet, toPlanet).KM
              )} km at about ${selectedSpeed} kilometers per hour`}
              items={getDescriptionListItems()}
            />
          </div>
        )}
        <RadioGroup
          title="Travel method"
          options={organiseTravelSpeedsForRadioGroup()}
          selectedOption={selectedSpeed}
          setSelectedOption={setSelectedSpeed}
        />
      </section>

      <section className="my-10 flex just-between">
        <div className="flex-1">
          {<FactList facts={FACTS[getSelectedPlanetsInOrder()[0]]} />}
        </div>
        <div className="flex-1">
          {<FactList facts={FACTS[getSelectedPlanetsInOrder()[1]]} />}
        </div>
      </section>
    </main>
  );
};

export default Home;
