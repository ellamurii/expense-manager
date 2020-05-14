import { combineReducers } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import expensesReducer from "./expensesReducer";
import categoriesReducer from "./categoriesReducer";

export default combineReducers({
  form: reduxFormReducer,
  expenses: expensesReducer,
  categories: categoriesReducer,
});
