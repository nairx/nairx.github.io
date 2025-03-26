// npm install @reduxjs/toolkit react-redux
import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todo/todoSlice";
import userReducer from "./features/user/userSlice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
    users: userReducer,
  },
});

export default store;
