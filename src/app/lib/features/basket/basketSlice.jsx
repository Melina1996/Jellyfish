"use client"; //this is a client side component

import { createSlice } from "@reduxjs/toolkit";

export const basketSlice = createSlice({
  name: "basket",
  initialState: {
    value: [],
    buy: false
  },
  reducers: {
    add: (state, action) => {
      //only if product does not exist yet on my array, I add it
      if (!state.value.some((item) => item.name === action.payload.name)) {
        state.value.push(action.payload);
      } else {
        state.value;
      }

      //I get index of my product
      const index = state.value.findIndex(
        (obj) => obj.name === action.payload.name
      );

      //if the property "quantity" does not exist yet, I add it to my object, if it exists, I change the quantity of my product
      if ("quantity" in state.value[index]) {
        state.value[index].quantity += 1;
      } else {
        //add the property "quantity"
        state.value[index] = { ...state.value[index], quantity: 1 };
      }
    },
    remove: (state, action) => {
      state.value.splice(action.payload, 1);
    },
    removeOneItem: (state, action) => {
      //I get index of my product
      const index = state.value.findIndex(
        (obj) => obj.name === action.payload.name
      );

      //I apply index to change quantity of my product
      if (state.value[index].quantity > 1) {
        state.value[index].quantity -= 1;
      } else {
        state.value.splice(index, 1);
      }
    },
    buying: (state, action) => {
      state.buy = action.payload
    },
  },
});

export const { add, remove, removeOneItem, buying } = basketSlice.actions;

export default basketSlice.reducer;
