export default (state, action) => {
  switch (action.type) {
    case "CREATE_LINK_TOKEN":
      return {
        ...state,
        publicToken: action.payload,
      };
    case "GET_ACCESS_TOKEN":
      return {
        ...state,
        accessToken: action.payload,
      }
    case "GET_TRANSACTIONS":
      return {
        ...state,
        transactions: action.payload,
      }
      case "PLAID_ERROR":
        return {
          ...state,
          error: console.log(action.payload),
        }
    default:
      return state;
  }
};
