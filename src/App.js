import Costs from "./components/Costs/Costs";
import NewCost from "./components/NewCost/NewCost";
import { useState } from "react";

const INITIAL_COSTS = [
  {
    id: "c1",
    costDate: new Date(2025, 3, 17),
    costName: "Холодильник",
    costAmount: 999.99,
  },
  {
    id: "c2",
    costDate: new Date(2025, 4, 11),
    costName: "Смартфон",
    costAmount: 500.99,
  },
  {
    id: "c3",
    costDate: new Date(2025, 2, 2),
    costName: "Навушники",
    costAmount: 50.99,
  },
];

const App = () => {
  const [costs, setCosts] = useState(INITIAL_COSTS);

  const addCostHandler = (cost) => {
    setCosts((previosCosts) => {
      return [cost, ...previosCosts];
    });
  };

  return (
    <div>
      <NewCost onAddCost={addCostHandler} />
      <Costs costs={costs} />
    </div>
  );
};

export default App;
