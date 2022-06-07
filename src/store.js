import { configureStore, createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user",
  initialState: "Kim",

  reducers: {
    changeName(state) {
      return "John kim";
    },
  },
});

export let { changeName } = user.actions;

let cart = createSlice({
  name: "cart",
  initialState: [
    { id: 0, name: "White and Black", count: 2 },
    { id: 2, name: "Grey Yordan", count: 1 },
  ],
  reducers: {
    addCount(state, action) {
      let idNum = state.findIndex((cart) => cart.id === action.payload);
      state[idNum].count++;
    },
    addItem(state, action) {
      let newItem = action.payload;
      let sameItem = state.findIndex((cart) => cart.id === newItem.id);
      console.log(sameItem);

      sameItem === -1 ? state.push(action.payload) : state[sameItem].count++;
    },
  },
});

export let { addCount, addItem } = cart.actions;

export default configureStore({
  reducer: {
    user: user.reducer,
    cart: cart.reducer,
  },
});
