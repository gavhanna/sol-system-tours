import React from "react";
// use tailwind

const DescriptionList = ({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: { label: string; value: string }[];
}) => {
  return (
    <>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-sm">{description}</p>
      <div className="flex flex-col gap-2 bg-blue-50 p-5 rounded">
        <div className="flex flex-col gap-2">
          {items.map((item) => (
            <div key={item.label} className="flex flex-row gap-2">
              <div className="w-1/3 text-5xl">{item.label}</div>
              <div className="w-2/3 text-5xl font-bold">{item.value}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default DescriptionList;
