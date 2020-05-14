import { LOADING, FETCH_EXPENSES, ADD_EXPENSE } from "../actionTypes";

const initialState = {
  data: [],
  isLoading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_EXPENSES:
      return { ...state, data: payload, isLoading: false };
    case ADD_EXPENSE:
      const copy = state.data.filter((item) => item.id !== payload.id);
      const updated = {
        ...state,
        data: [...copy, payload],
        isLoading: false,
      };
      return updated;
    case LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
