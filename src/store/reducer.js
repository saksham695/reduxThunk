export const counterReducer = (state = 0, action) => {
  const { type, payload } = action;
  console.log("Reducer running", type);
  switch (type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
