import React, { SetStateAction } from "react";
import styles from "./RadioGroup.module.scss";
import cx from "classnames";

const RadioGroup = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
  disabledItems,
}: {
  title?: string;
  options: { label: string; value: string | number; icon?: JSX.Element }[];
  selectedOption: string | number;
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  disabledItems?: string[];
}) => {
  return (
    <div className={cx(styles.radioGroup)}>
      {title && <h3 className={styles.title}>{title}</h3>}
      <div className="flex gap-2 h-full justify-between">
        {options.map((option) => (
          <button
            key={option.value}
            className={cx(styles.button, {
              [styles.active]: selectedOption === option.value,
            })}
            onClick={() => setSelectedOption(option.value)}
            disabled={
              disabledItems && disabledItems.includes(option.value as string)
            }
          >
            <label>{option.icon || option.label}</label>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
