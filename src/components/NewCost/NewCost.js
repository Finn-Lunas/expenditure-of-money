import { useState } from "react";
import CostForm from "./CostForm";
import "./NewCost.css";

const NewCost = (props) => {
  const [isFormVisible, setFormVisible] = useState(false);
  const saveCostDataHandler = (inputCostData) => {
    const costData = {
      ...inputCostData,
      id: Math.random().toString(),
    };
    props.onAddCost(costData);
    setFormVisible(false);
  };

  const startEditingHandler = () => {
    setFormVisible(true);
  };

  const cancelEditingHandler = () => {
    setFormVisible(false);
  };

  return (
    <div className="new-cost">
      {!isFormVisible && (
        <button onClick={startEditingHandler}>Додати Розхід</button>
      )}
      {isFormVisible && (
        <CostForm
          onSaveCostData={saveCostDataHandler}
          onCancel={cancelEditingHandler}
        />
      )}
    </div>
  );
};

export default NewCost;
