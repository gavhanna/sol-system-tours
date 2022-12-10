import React, { SetStateAction } from "react";
import styles from "./RadioGroup.module.scss";
import cx from "classnames";

const RadioGroup = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
  disabledItems,
  baseColor = "indigo",
  type = "digital",
}: {
  title: string;
  options: { label: string; value: string | number; icon?: JSX.Element }[];
  selectedOption: string | number;
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  disabledItems?: string[];
  baseColor?: "pink" | "indigo" | "lime";
  type?: "digital" | "digital-muted" | "light-strip";
}) => {
  return (
    <div className={cx(styles.radioGroup, styles[type])}>
      {title && <h3 className={styles.title}>{title}</h3>}
      {options.map((option) => (
        <button
          key={option.value}
          className={cx(
            styles.button,
            {
              [styles.active]: selectedOption === option.value,
            },
            styles[type]
          )}
          onClick={() => setSelectedOption(option.value)}
          disabled={
            disabledItems && disabledItems.includes(option.value as string)
          }
        >
          <span></span>
          <label>{option.label}</label>
        </button>
      ))}
    </div>
  );
};

export default RadioGroup;
