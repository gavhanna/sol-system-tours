import React from "react";
import styles from "./DescriptionList.module.scss";
import cx from "classnames";

const DescriptionList = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { label: string; value: string }[];
}) => {
  // create function to type in string or number one character at a time
  const typeIn = (text: string) => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        console.log(text[i]);
        i++;
      } else {
        clearInterval(interval);
      }
    }, 100);
  };

  return (
    <>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <dl key={item.value} className="flex">
              <dt className="text-xl w-24">{item.label}</dt>
              <dd className={cx("text-xl font-bold", styles["numeric-value"])}>
                {item.value}
              </dd>
            </dl>
          ))}
        </div>
      </div>
    </>
  );
};

export default DescriptionList;
