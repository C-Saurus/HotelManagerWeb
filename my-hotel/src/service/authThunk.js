import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../utils/api/local";

export const loginUser = createAsyncThunk("auth/loginStatus", async (user) => {
  try {
    const response = await axios.post(url + "/user/login/", user);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});

export const logoutUser = createAsyncThunk("auth/logoutStatus", async () => {
  try {
    const response = await axios.post(url + "/user/logout", {});
    return {
      statusCode: response.status,
      msg: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});

export const registerUser = createAsyncThunk(
  "auth/registerStatus",
  async (newUser) => {
    try {
      const response = await axios.post(url + "/user/register", newUser);
      return {
        statusCode: response.status,
        msg: response.data,
      };
    } catch (error) {
      return { statusCode: error.response.status, msg: error.response.data };
    }
  }
);
