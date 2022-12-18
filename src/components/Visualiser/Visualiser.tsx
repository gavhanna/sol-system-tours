import PLANET_IMAGES from "./planetImages";
import cx from "classnames";
import styles from "./Visualiser.module.scss";

const Visualiser = ({
  toPlanet,
  fromPlanet,
}: {
  toPlanet: string;
  fromPlanet: string;
}) => {
  return (
    <div
      className={cx(
        "flex flex-row justify-between items-center",
        styles.visualiser
      )}
    >
      <img
        src={PLANET_IMAGES[fromPlanet]}
        alt={fromPlanet}
        title={fromPlanet}
      />
      <img src={PLANET_IMAGES[toPlanet]} alt={toPlanet} title={toPlanet} />
    </div>
  );
};

export default Visualiser;
