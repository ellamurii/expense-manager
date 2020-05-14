import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchExpenses } from "../actions/expenseActions";
import ButtonNav from "../components/ButtonNav";
import ExpenseCard from "../components/ExpenseCard";

const Expenses = (props) => {
  const { fetchExpenses, expenses } = props;

  useEffect(() => {
    !expenses.data.length && fetchExpenses();
  }, [expenses.data.length, fetchExpenses]);

  const renderCard = (item) => {
    return <ExpenseCard {...item} key={item.id} />;
  };

  return (
    <div className="ui column aligned">
      <h2 className="ui teal container center aligned">Expenses</h2>
      <div className="ui container center aligned">
        <ButtonNav label="Add new" url="/add" />
      </div>
      <div className="ui segment raised">
        <div className="ui divided list">{expenses.data.map(renderCard)}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { expenses: state.expenses };
};

export default connect(mapStateToProps, { fetchExpenses })(Expenses);
