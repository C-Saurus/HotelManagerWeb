import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../utils/api/local";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    status: "idle",
  },
  reducer: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUser.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(getUser.rejected, (state) => {
        state.status = "Falsed";
      })
      .addCase(updateUser.pending, (state) => {
        state.status = "Loading...";
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        state.status = "Successful";
      })
      .addCase(updateUser.rejected, (state) => {
        state.status = "Falsed";
      });
  },
});

export const getUser = createAsyncThunk(
  "user/getUserStatus",
  async (accessToken) => {
    try {
      const response = await axios.get(url + "/user/me/", {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      });
      return {
        statusCode: response.status,
        data: response.data,
      };
    } catch (error) {
      return { statusCode: error.response.status, msg: error.response.data };
    }
  }
);

export const updateUser = createAsyncThunk(
  "user/updateUserStatus",
  async ({ id, body }) => {
    try {
      const response = await axios.put(url + `/user/update/${id}`, body);
      return {
        statusCode: response.status,
        msg: response.data,
      };
    } catch (error) {
      return { statusCode: error.response.status, msg: error.response.data };
    }
  }
);
