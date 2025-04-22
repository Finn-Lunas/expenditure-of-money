import "./CostDate.css";

const CostDate = (props) => {
  const month = props.costDate.toLocaleString("uk-UA", { month: "long" });
  const year = props.costDate.toLocaleString("uk-UA", { year: "numeric" });
  const day = props.costDate.toLocaleString("uk-UA", { day: "2-digit" });

  return (
    <div className="cost-date">
      <div className="cost-date__month">{month}</div>
      <div className="cost-date__year">{year}</div>
      <div className="cost-date__day">{day}</div>
    </div>
  );
};

export default CostDate;
