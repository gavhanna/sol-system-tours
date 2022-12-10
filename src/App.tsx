import Home from "./pages/Home";
import styles from "./App.module.scss";
import cx from "classnames";

function App() {
  return (
    <div className={cx("p-5 mx-auto max-w-7xl", styles.app)}>
      <Home />
    </div>
  );
}

export default App;
