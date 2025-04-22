import "./CostItem.css";
import CostDate from "./CostDate";
import Card from "../UI/Card";

const CostItem = (props) => {
  return (
    <li>
      <Card className="cost-item">
        <CostDate costDate={props.costDate} />
        <div className="cost-item__description">
          <h2>{props.costName}</h2>
          <div className="cost-item__price">${props.costAmount}</div>
        </div>
      </Card>
    </li>
  );
};

export default CostItem;
