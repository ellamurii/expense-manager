import expenseApi from "../api/expenseApi";
import { FETCH_CATEGORIES, LOADING } from "../actionTypes";

export const fetchCategories = () => async (dispatch) => {
  dispatch({ type: LOADING });
  const { data } = await expenseApi.get(`/categories.json`);
  dispatch({ type: FETCH_CATEGORIES, payload: data });
};
