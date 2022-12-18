import styles from "./Dropdown.module.scss";
import cx from "classnames";

type DropdownProps = {
  options: { label: string; value: string | number }[];
  selectedOption: string | number;
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  disabledItems?: string[];
  type?: "primary" | "secondary";
};

const Dropdown = (props: DropdownProps) => {
  const {
    options,
    selectedOption,
    setSelectedOption,
    disabledItems,
    type = "primary",
  } = props;

  return (
    <div className={cx(styles.dropdown, styles[type], "button")}>
      <select
        value={selectedOption}
        onChange={(e) => setSelectedOption(e.target.value)}
        className="button"
      >
        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
            disabled={
              disabledItems && disabledItems.includes(option.value as string)
            }
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Dropdown;
