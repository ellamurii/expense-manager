import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory } from "react-router-dom";
import { addExpense, fetchExpenses } from "../actions/expenseActions";
import { fetchCategories } from "../actions/categoryActions";
import ButtonNav from "../components/ButtonNav";
import ExpenseForm from "../components/ExpenseForm";

const ExpenseAdd = (props) => {
  const {
    categories,
    expenses,
    fetchCategories,
    fetchExpenses,
    addExpense,
  } = props;

  useEffect(() => {
    fetchCategories();
    !expenses.data.length && fetchExpenses();
  }, [expenses.data.length, fetchCategories, fetchExpenses]);

  const history = useHistory();
  const navigateTo = (url) => {
    history.push(url);
  };

  const newExpense = async (item) => {
    const id = expenses.data.length + 1;
    await addExpense({ ...item, id });
    navigateTo("/list");
  };

  return (
    <div className="ui container">
      <div className="ui teal three item inverted menu">
        <div className="item">
          <ButtonNav label="Cancel" url="/list" />
        </div>
        <div className="item">
          <p className="item">Expenses</p>
        </div>
        <div className="item">
          <button
            className="ui inverted basic button item"
            form="expense-form"
            type="submit"
          >
            Done
          </button>
        </div>
      </div>
      <div className="ui container">
        <ExpenseForm categories={categories.data} onSubmit={newExpense} />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { expenses: state.expenses, categories: state.categories };
};

export default connect(mapStateToProps, {
  fetchExpenses,
  fetchCategories,
  addExpense,
})(ExpenseAdd);
