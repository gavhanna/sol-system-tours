import React, { SetStateAction } from "react";

const RadioGroup = ({
  title,
  options,
  selectedOption,
  setSelectedOption,
  disabledItems,
  baseColor = "indigo",
}: {
  title: string;
  options: { label: string; value: string | number; icon?: JSX.Element }[];
  selectedOption: string | number;
  setSelectedOption: React.Dispatch<React.SetStateAction<any>>;
  disabledItems?: string[];
  baseColor?: "pink" | "indigo" | "lime";
}) => {
  const getBtnClassname = (optionValue: string | number) => {
    // this is a bit annoying, cant use string template literals with tailing..
    // clean this up later!
    switch (baseColor) {
      case "pink":
        return `${
          selectedOption === optionValue
            ? `bg-pink-600 text-white`
            : `bg-pink-200 text-pink-600`
        } rounded-lg px-4 py-1.5 text-base font-semibold leading-7 shadow-sm ring-1 ring-pink-200 hover:ring-pink-300`;

      case "lime":
        return `${
          selectedOption === optionValue
            ? `bg-lime-600 text-white`
            : `bg-lime-200 text-lime-600`
        } rounded-lg px-4 py-1.5 text-base font-semibold leading-7 shadow-sm ring-1 ring-lime-200 hover:ring-lime-300`;
      case "indigo":
      default:
        return `${
          selectedOption === optionValue
            ? `bg-indigo-600 text-white`
            : `bg-indigo-200 text-indigo-600`
        } rounded-lg px-4 py-1.5 text-base font-semibold leading-7 shadow-sm ring-1 ring-indigo-200 hover:ring-indigo-300`;
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      <div className="flex flex-col gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            className={getBtnClassname(option.value)}
            onClick={() => setSelectedOption(option.value)}
            disabled={
              disabledItems && disabledItems.includes(option.value as string)
            }
          >
            <div className="flex flex-row gap-2 items-center">
              {option.icon}
              <div>{option.label}</div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RadioGroup;
