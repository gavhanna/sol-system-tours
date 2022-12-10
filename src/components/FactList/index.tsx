import React from "react";
import { Screen } from "../";

interface Props {
  facts: string[];
}

const FactList: React.FC<Props> = ({ facts }) => (
  <Screen>
    <div className=" rounded-lg p-4">
      <ul className="list-disc pl-8 text-lg font-bold">
        {facts.map((fact) => (
          <li key={fact} className="mb-2">
            {fact}
          </li>
        ))}
      </ul>
    </div>
  </Screen>
);

export default FactList;
