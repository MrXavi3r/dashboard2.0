export default (state, action) => {
  switch (action.type) {
    case "GET_GOALS":
      return {
        ...state,
        loading: false,
        goals: action.payload,
      };
    case "UPDATE_GOAL":
      return {
        ...state,
        loading: false,
        goals: { ...state.goals, [action.payload._id]: action.payload },
      };
    case "GOALS_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
