import React from "react";

interface Props {
  facts: string[];
}

const FactList: React.FC<Props> = ({ facts }) => (
  <div className="border border-gray-300 rounded-lg p-4">
    <ul className="list-disc pl-8 text-lg font-bold text-gray-800">
      {facts.map((fact) => (
        <li key={fact} className="mb-2">
          {fact}
        </li>
      ))}
    </ul>
  </div>
);

export default FactList;
