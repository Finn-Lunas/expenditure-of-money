import { useState } from "react";
import "./CostForm.css";

const CostForm = (props) => {
  const [costName, setCostName] = useState("");
  const [costAmount, setCostAmount] = useState("");
  const [costDate, setCostDate] = useState("");

  const costNameChangeHandler = (event) => {
    setCostName(event.target.value);
  };

  const costAmountChangeHandler = (event) => {
    setCostAmount(event.target.value);
  };

  const costDateChangeHandler = (event) => {
    setCostDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const costData = {
      costName: costName,
      costAmount: costAmount,
      costDate: new Date(costDate),
    };

    props.onSaveCostData(costData);

    setCostName("");
    setCostAmount("");
    setCostDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-cost__controls">
        <div className="new-cost__control">
          <label>Назва</label>
          <input
            type="text"
            value={costName}
            onChange={costNameChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Сума</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            value={costAmount}
            onChange={costAmountChangeHandler}
          />
        </div>
        <div className="new-cost__control">
          <label>Дата</label>
          <input
            type="date"
            min="2019-01-01"
            step="2025-04-21"
            value={costDate}
            onChange={costDateChangeHandler}
          />
        </div>
        <div className="new-cost__actions">
          <button type="submit">Додати Розхід</button>
          <button type="button" onClick={props.onCancel}>
            Скасувати
          </button>
        </div>
      </div>
    </form>
  );
};

export default CostForm;
