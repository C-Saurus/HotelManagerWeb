import { createSlice } from "@reduxjs/toolkit";
import {
  addRoom,
  getRoomById,
  deleteRoom,
  getRoom,
  updateRoom,
} from "./roomThunk";

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    status: "idle",
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getRoom.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getRoom.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(getRoom.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(addRoom.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(addRoom.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(addRoom.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(updateRoom.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(updateRoom.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(updateRoom.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(deleteRoom.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(deleteRoom.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(deleteRoom.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(getRoomById.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getRoomById.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(getRoomById.rejected, (state) => {
        state.status = "Falsed";
      });
  },
});
