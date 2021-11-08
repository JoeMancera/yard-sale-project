import React, { useState } from "react";

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

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter(item => item.id !== payload.id),
    })
  }

  const isOnCart = (payload) => {
    return state.cart.find(item => item.id === payload.id)
  }

  return {
    state,
    addToCart,
    removeFromCart,
    isOnCart
  };
}

export default useInitialState;
