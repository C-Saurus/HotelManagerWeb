import { createSlice } from "@reduxjs/toolkit";
import { loginUser, logoutUser, registerUser } from "./authThunk";
import { removeLocalStorage, setLocalStorage } from "../utils/localStore";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    status: "idle",
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.status = "Successful";
        if (action.payload.statusCode === 200) {
          setLocalStorage("token", action.payload.data.accessToken);
          setLocalStorage("id", action.payload.data.id);
        }
      })
      .addCase(loginUser.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(logoutUser.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.status = "Successful";
        removeLocalStorage("token");
        removeLocalStorage("id");
      })
      .addCase(logoutUser.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(registerUser.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(registerUser.fulfilled, (state) => {
        state.status = "Successful";
      })
      .addCase(registerUser.rejected, (state) => {
        state.status = "Falsed";
      });
  },
});
