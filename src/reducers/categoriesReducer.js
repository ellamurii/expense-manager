import { LOADING, FETCH_CATEGORIES } from "../actionTypes";

const initialState = {
  data: [],
  isLoading: true,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_CATEGORIES:
      return { ...state, data: payload, isLoading: false };
    case LOADING:
      return { ...state, isLoading: true };
    default:
      return state;
  }
};
