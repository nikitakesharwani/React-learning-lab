import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },
  reducers: {
    addItems: (state, action) => {
      //Vanilla(older) Redux => DON'T MUTATE THE STATE, Returing new state is mandaory
      // const newState = [...state];
      //newState.items.push(action.payload);
      //return newState;

      //Reduxjs/toolkit - Mutating state is mandatory.
      state.items.push(action.payload);
    },
    removeItems: (state) => {
      state.items.pop();
    },

    //originalState = {items : ["pizza"]}
    clearCart: (state) => {
      // RTK - either the existing state or return a new state
      // state.items.length = 0; //originalState = [] ->originalState is modified
      // return {items: []}; -> this new object will be replaced inside originalState = {items: []}
      state.items.length = 0;
    },
  },
});

export const { addItems, removeItems, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
