import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./todoSlice";
import { saveState } from "../utils/LocalStorage";
const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

store.subscribe(() => {
    const state = store.getState();
    saveState(state.todos)
})

export default store;
