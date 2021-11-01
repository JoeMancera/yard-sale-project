import React, { useState} from "react";

const initialState = {
  cart: [],
}

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    const newCart = [...state.cart, payload];
    setState({
      ...state,
      cart: newCart,
    });
  }

  return {state, addToCart};
}

export default useInitialState;
