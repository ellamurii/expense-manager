import expenseApi from "../api/expenseApi";
import { FETCH_EXPENSES, LOADING, ADD_EXPENSE } from "../actionTypes";

export const fetchExpenses = () => async (dispatch) => {
  dispatch({ type: LOADING });
  const { data } = await expenseApi.get(`/expenses.json`);
  dispatch({ type: FETCH_EXPENSES, payload: data });
};

export const addExpense = (params) => async (dispatch) => {
  dispatch({ type: ADD_EXPENSE, payload: params });
};
