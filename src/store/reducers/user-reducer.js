export const userReducer = (state = [], action) => {
  const { type, payload } = action;
  switch (type) {
    case "FETCH_USER":
      return [...payload];
      break;
    default:
      return state;
  }
};
