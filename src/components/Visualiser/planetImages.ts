import Mercury from "./planet_images/mercury.png";
import Venus from "./planet_images/venus.png";
import Earth from "./planet_images/earth.png";
import Mars from "./planet_images/mars.png";
import Jupiter from "./planet_images/jupiter.png";
import Saturn from "./planet_images/saturn.png";
import Uranus from "./planet_images/uranus.png";
import Neptune from "./planet_images/neptune.png";
import { PLANETS } from "../../utils/planets";

const PLANET_IMAGES = {
  [PLANETS.MERCURY]: Mercury,
  [PLANETS.VENUS]: Venus,
  [PLANETS.EARTH]: Earth,
  [PLANETS.MARS]: Mars,
  [PLANETS.JUPITER]: Jupiter,
  [PLANETS.SATURN]: Saturn,
  [PLANETS.URANUS]: Uranus,
  [PLANETS.NEPTUNE]: Neptune,
};

export default PLANET_IMAGES;
