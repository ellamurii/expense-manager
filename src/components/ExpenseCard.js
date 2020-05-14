import React from "react";

const ExpenseCard = ({ notes, category, date, amount }) => {
  return (
    <div className="item">
      <div className="right floated content">
        <div className="ui button red">${amount}</div>
      </div>
      <div className="content">
        <p className="header">{notes}</p>
        <p>
          {date} | {category}
        </p>
      </div>
    </div>
  );
};

export default ExpenseCard;
