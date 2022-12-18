import {
  FaBicycle,
  FaCar,
  FaLightbulb,
  FaPlane,
  FaSpaceShuttle,
  FaWalking,
} from "react-icons/fa";

const PLANETS = {
  MERCURY: "Mercury",
  VENUS: "Venus",
  EARTH: "Earth",
  MARS: "Mars",
  JUPITER: "Jupiter",
  SATURN: "Saturn",
  URANUS: "Uranus",
  NEPTUNE: "Neptune",
};

const PLANETS_ARRAY = Object.values(PLANETS);

const DISTANCES = {
  [PLANETS.MERCURY]: {
    [PLANETS.VENUS]: {
      AU: 0.34,
      KM: 50_290_000,
      MILES: 31_248_757,
    },
    [PLANETS.EARTH]: {
      AU: 0.61,
      KM: 91_691_000,
      MILES: 56_974_146,
    },
    [PLANETS.MARS]: {
      AU: 1.14,
      KM: 170_030_000,
      MILES: 105_651_744,
    },
    [PLANETS.JUPITER]: {
      AU: 4.82,
      KM: 720_420_000,
      MILES: 447_648_234,
    },
    [PLANETS.SATURN]: {
      AU: 9.14,
      KM: 1_366_690_000,
      MILES: 849_221_795,
    },
    [PLANETS.URANUS]: {
      AU: 18.82,
      KM: 2_815_640_000,
      MILES: 1_749_638_696,
    },
    [PLANETS.NEPTUNE]: {
      AU: 29.7,
      KM: 4_443_090_000,
      MILES: 2_760_936_126,
    },
  },
  [PLANETS.VENUS]: {
    [PLANETS.EARTH]: {
      AU: 0.28,
      KM: 41_400_000,
      MILES: 25_724_767,
    },
    [PLANETS.MARS]: {
      AU: 0.8,
      KM: 119_740_000,
      MILES: 74_402_987,
    },
    [PLANETS.JUPITER]: {
      AU: 4.48,
      KM: 94_300_000,
      MILES: 58_700_000,
    },
    [PLANETS.SATURN]: {
      AU: 8.804,
      KM: 1_316_400_000,
      MILES: 817_973_037,
    },
    [PLANETS.URANUS]: {
      AU: 18.49,
      KM: 2_765_350_000,
      MILES: 1_718_388_490,
    },
    [PLANETS.NEPTUNE]: {
      AU: 29.37,
      KM: 4_392_800_000,
      MILES: 2_729_685_920,
    },
  },
  [PLANETS.EARTH]: {
    [PLANETS.MARS]: {
      AU: 0.52,
      KM: 78_340_000,
      MILES: 48_678_219,
    },
    [PLANETS.JUPITER]: {
      AU: 4.2,
      KM: 628_730_000,
      MILES: 390_674_710,
    },
    [PLANETS.SATURN]: {
      AU: 8.52,
      KM: 1_275_000_000,
      MILES: 792_248_270,
    },
    [PLANETS.URANUS]: {
      AU: 18.21,
      KM: 2_723_950_000,
      MILES: 1_692_662_530,
    },
    [PLANETS.NEPTUNE]: {
      AU: 29.09,
      KM: 4_351_400_000,
      MILES: 2_703_959_960,
    },
  },
  [PLANETS.MARS]: {
    [PLANETS.JUPITER]: {
      AU: 3.68,
      KM: 550_390_000,
      MILES: 342_012_346,
    },
    [PLANETS.SATURN]: {
      AU: 7.99,
      KM: 1_196_660_000,
      MILES: 743_604_524,
    },
    [PLANETS.URANUS]: {
      AU: 17.69,
      KM: 2_645_610_000,
      MILES: 1_643_982_054,
    },
    [PLANETS.NEPTUNE]: {
      AU: 28.56,
      KM: 4_273_060_000,
      MILES: 2_655_279_484,
    },
  },
  [PLANETS.JUPITER]: {
    [PLANETS.SATURN]: {
      AU: 4.32,
      KM: 646_270_000,
      MILES: 401_592_178,
    },
    [PLANETS.URANUS]: {
      AU: 14.01,
      KM: 2_095_220_000,
      MILES: 1_301_969_708,
    },
    [PLANETS.NEPTUNE]: {
      AU: 24.89,
      KM: 3_722_670_000,
      MILES: 2_313_267_138,
    },
  },
  [PLANETS.SATURN]: {
    [PLANETS.URANUS]: {
      AU: 9.7,
      KM: 1_448_950_000,
      MILES: 900_377_530,
    },
    [PLANETS.NEPTUNE]: {
      AU: 20.57,
      KM: 3_076_400_000,
      MILES: 1_911_674_960,
    },
  },
  [PLANETS.URANUS]: {
    [PLANETS.NEPTUNE]: {
      AU: 10.88,
      KM: 1_627_450_000,
      MILES: 1_011_297_430,
    },
  },
};

const TRAVEL_METHODS = {
  WALK: {
    SPEED: 5,
    ICON: <FaWalking />,
  },
  CYCLE: {
    SPEED: 20,
    ICON: <FaBicycle />,
  },
  DRIVE: {
    SPEED: 80,
    ICON: <FaCar />,
  },
  FLY: {
    SPEED: 900,
    ICON: <FaPlane />,
  },
  VOYAGER1: {
    SPEED: 17_000,
    ICON: <FaSpaceShuttle />,
  },
  LIGHT: {
    SPEED: 1_079_252_849,
    ICON: <FaLightbulb />,
  },
};

const FACTS = {
  [PLANETS.MERCURY]: [
    "Mercury is the smallest planet in the solar system.",
    "Mercury is the closest planet to the Sun.",
    "Mercury has no moons.",
    "Mercury has a very thin atmosphere.",
    "Mercury's surface is covered in craters.",
  ],
  [PLANETS.VENUS]: [
    "Venus is the second-closest planet to the Sun.",
    "Venus is the hottest planet in the solar system.",
    "Venus has no moons.",
    "Venus has thick clouds that obscure its surface.",
    "Venus rotates in the opposite direction of most other planets.",
  ],
  [PLANETS.EARTH]: [
    "Earth is the third-closest planet to the Sun.",
    "Earth is the only planet known to support life.",
    "Earth has one moon.",
    "Earth is the largest of the terrestrial planets.",
    "Earth's atmosphere contains oxygen, which is necessary for life as we know it.",
  ],
  [PLANETS.MARS]: [
    "Mars is the fourth-closest planet to the Sun.",
    "Mars is sometimes called the Red Planet because of its reddish appearance.",
    "Mars has two small moons, Phobos and Deimos.",
    "Mars is home to the tallest mountain in the solar system, Olympus Mons.",
    "Mars is the second-smallest planet in the solar system, after Mercury.",
  ],
  [PLANETS.JUPITER]: [
    "Jupiter is the fifth-closest planet to the Sun.",
    "Jupiter is the largest planet in the solar system.",
    "Jupiter has at least 63 moons.",
    "Jupiter's Great Red Spot is a massive storm that has been raging for hundreds of years.",
    "Jupiter is a gas giant, meaning it does not have a solid surface.",
  ],
  [PLANETS.SATURN]: [
    "Saturn is the sixth-closest planet to the Sun.",
    "Saturn is the second-largest planet in the solar system.",
    "Saturn has at least 82 moons.",
    "Saturn is known for its beautiful rings, which are made up of ice and other debris.",
    "Saturn is a gas giant, like Jupiter.",
  ],
  [PLANETS.URANUS]: [
    "Uranus is the seventh-closest planet to the Sun.",
    "Uranus is the third-largest planet in the solar system.",
    "Uranus has at least 27 moons.",
    "Uranus is tilted on its side, so it rotates on its axis in a perpendicular direction to most other planets.",
    "Uranus is a gas giant, like Jupiter and Saturn.",
  ],
  [PLANETS.NEPTUNE]: [
    "Neptune is the eighth-closest planet to the Sun.",
    "Neptune is the fourth-largest planet in the solar system.",
    "Neptune has at least 14 moons.",
    "Neptune is the windiest planet in the solar system, with winds reaching speeds of up to 2,100 km/h.",
    "Neptune is a gas giant, like Jupiter and Saturn.",
  ],
};

const getDistanceBetweenAnyTwoPlanets = (planet1: string, planet2: string) => {
  const [firstPlanet, secondPlanet] = [planet1, planet2].sort(
    (a, b) => PLANETS_ARRAY.indexOf(a) - PLANETS_ARRAY.indexOf(b)
  );

  return DISTANCES[firstPlanet][secondPlanet];
};

const getTravelTime = (planet1: string, planet2: string, speed: number) => {
  const planet1ToPlanet2 = getDistanceBetweenAnyTwoPlanets(planet1, planet2);
  const travelTime = planet1ToPlanet2.KM / speed;

  return {
    hours: travelTime > 1000 ? Math.round(travelTime) : travelTime,
    days: Math.round(travelTime / 24),
    weeks: Math.round(travelTime / 24 / 7),
    months: Math.round((travelTime / 24 / 7 / 30) * 100) / 100,
    years: Math.round((travelTime / 24 / 7 / 30 / 12) * 100) / 100,
  };
};

export {
  PLANETS,
  PLANETS_ARRAY,
  DISTANCES,
  TRAVEL_METHODS,
  getDistanceBetweenAnyTwoPlanets,
  getTravelTime,
  FACTS,
};
