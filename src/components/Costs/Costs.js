import Card from "../UI/Card";
import CostsFilter from "./CostsFilter";
import "./Costs.css";
import { useState } from "react";
import CostsList from "./CostsList";
import CostsDiagram from "./CostsDiagram";

const Costs = (props) => {
  const [selectedYear, setSelectedYear] = useState("2022");

  const yearChangeHandler = (year) => {
    setSelectedYear(year);
  };

  const filteredCosts = props.costs.filter((cost) => {
    return cost.costDate.getFullYear().toString() === selectedYear;
  });

  return (
    <Card className="costs">
      <CostsFilter year={selectedYear} onChangeYear={yearChangeHandler} />
      <CostsDiagram costs={filteredCosts} />
      <CostsList costs={filteredCosts} />
    </Card>
  );
};

export default Costs;
