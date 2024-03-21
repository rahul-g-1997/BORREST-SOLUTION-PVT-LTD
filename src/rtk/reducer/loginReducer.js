import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLogin: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState: initialState,
  reducers: {
    togglelogin: (state) => {
      state.isLogin = true;
    },
  },
});

// Destructuring to export reducer and actions directly
export const { reducer: loginReducer, actions } = loginSlice;
