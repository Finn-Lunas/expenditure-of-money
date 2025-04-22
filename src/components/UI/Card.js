import "./Card.css";

const Card = (prors) => {
  const classes = "card " + prors.className;
  return <div className={classes}>{prors.children}</div>;
};

export default Card;
