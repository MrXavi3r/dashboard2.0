export default (state, action) => {
  switch (action.type) {
    case "GET_DATA":
      return {
        ...state,
        loading: false,
        marketData: action.payload,
      };
    case "ADD_TICKER":
      return {
        ...state,
        tickerSymbols: [action.payload, ...state.tickerSymbols],
      };
    case "GET_TICKERS":
      return {
        ...state,
        loading: false,
        tickerSymbols: action.payload,
      };
    case "DELETE_TICKER":
      return {
        ...state,
        tickerSymbols: state.tickerSymbols.filter(
          (symbol) => symbol._id !== action.payload
        ),
      };
    case "DATA_ERROR":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
