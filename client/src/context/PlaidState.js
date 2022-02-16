import { createContext, useReducer, Dispatch, ReactNode } from "react";
import axios from "axios";
import PlaidReducer from "./PlaidReducer";

const initialState = {
  transactions: [],
};

export const PlaidContext = createContext(initialState);

export const TransactionsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(PlaidReducer, initialState);

  async function fetchLinkToken() {
    const res = await axios.get("/api/v1/plaid/create_link_token");
    const { link_token } = res.data.data;
    console.log(link_token);
    return link_token;
  }

    const handler = Plaid.create({
      token: await fetchLinkToken(),
      onSuccess: async (public_token, metadata) => {
        console.log(public_token);
        console.log(metadata);
        await axios.post(
          "/api/v1/plaid/token_exchange",
          JSON.stringify({ public_token })
        );
      },
    });
};
