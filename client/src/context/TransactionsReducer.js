export default (state, action) => {
  switch (action.type) {
    case "GET_TRANSACTIONS":
      return {
        ...state,
        loading: false,
        transactions: action.payload,
        balance: action.payload.reduce((acc, { amount }) => {
          let total = acc + amount;
          return total;
        }, 0),
        income: action.payload
          .filter((transaction) => transaction.amount > 0)
          .reduce((acc, curr) => acc + curr.amount, 0),
        spending: action.payload
          .filter((transaction) => transaction.amount < 0)
          .reduce((acc, curr) => acc + curr.amount, 0),
      };

    case "DELETE_TRANSACTION":
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== action.payload
        ),
      };

    case "ADD_TRANSACTION":
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    case "TRANSACTION_ERROR":
      return {
        ...state,
        error: action.payload,
      };

    default:
      return state;
  }
};
