import React from "react";
import { Field, reduxForm, reset } from "redux-form";

const onSubmitSuccess = (result, dispatch) => dispatch(reset("expenseForm"));

const ExpenseForm = ({ handleSubmit, categories }) => {
  const renderOption = (item) => {
    return (
      <option key={item.id} value={item.name}>
        {item.name}
      </option>
    );
  };

  return (
    <form
      id="expense-form"
      className="ui form inverted"
      onSubmit={handleSubmit}
    >
      <div className="field">
        <label htmlFor="amount">Amount</label>
        <Field name="amount" component="input" type="number" />
      </div>
      <div className="field">
        <label htmlFor="category">Category</label>
        <Field name="category" component="select">
          <option></option>
          {categories.map(renderOption)}
        </Field>
      </div>

      <div className="field">
        <label htmlFor="date">Date</label>
        <Field name="date" component="input" type="date" />
      </div>

      <div className="field">
        <label htmlFor="notes">Notes</label>
        <Field name="notes" component="textarea" />
      </div>
    </form>
  );
};

export default reduxForm({
  form: "expenseForm",
  onSubmitSuccess,
})(ExpenseForm);
