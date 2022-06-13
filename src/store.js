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

  initialState: [],

  initialState: [
  ],

  reducers: {
    addCount(state, action) {
      let idNum = state.findIndex((cart) => cart.id === action.payload);
      state[idNum].count++;
    },
    addItem(state, action) {
      let newItem = action.payload;
      let sameItem = state.findIndex((cart) => cart.id === newItem.id);
<<<<<<< HEAD

=======
      
>>>>>>> a640f8ff3f384854313df43fca8c9ffae94bb828
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
