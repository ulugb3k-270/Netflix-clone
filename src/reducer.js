export const initialState = {
  data: null,
};

export const actionTypes = {
  SET_DATA: "SET_DATA",
};

const reducer = (state, action) => {
  return {
    data: action,
  };
};

export default reducer;
