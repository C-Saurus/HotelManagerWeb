import { createSlice } from "@reduxjs/toolkit";
import {
  addBooking,
  deleteBooking,
  getBooking,
  updateBooking,
} from "./bookingThunk";

export const bookingSlice = createSlice({
  name: "booking",
  initialState: {
    status: "idle",
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getBooking.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getBooking.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(getBooking.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(addBooking.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(addBooking.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(addBooking.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(updateBooking.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(updateBooking.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(updateBooking.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(deleteBooking.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(deleteBooking.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(deleteBooking.rejected, (state) => {
        state.status = "Falsed";
      });
  },
});
