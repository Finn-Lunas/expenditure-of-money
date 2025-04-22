import "./CostsList.css";
import CostItem from "./CostItem";

const CostsList = (props) => {
  if (props.costs.length === 0) {
    return <h2 className="cost-list__fallback">Цього року не було витрат</h2>;
  }
  return (
    <ul className="cost-list">
      {props.costs.map((cost) => (
        <CostItem
          key={cost.id}
          costDate={cost.costDate}
          costName={cost.costName}
          costAmount={cost.costAmount}
        />
      ))}
    </ul>
  );
};

export default CostsList;
