import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../utils/api/local";

export const getRoom = createAsyncThunk("rooms/get", async () => {
  try {
    const response = await axios.get(url + "/rooms/getAll");
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});

export const getRoomById = createAsyncThunk("rooms/getById", async (id) => {
  try {
    const response = await axios.get(url + `/rooms/get/${id}`);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});

export const addRoom = createAsyncThunk("rooms/add", async (body) => {
  try {
    const response = await axios.post(url + `/rooms/add`, body);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});
export const updateRoom = createAsyncThunk(
  "rooms/update",
  async ({ body, id }) => {
    try {
      const response = await axios.put(url + `/rooms/edit/${id}`, body);
      return {
        statusCode: response.status,
        msg: response.data,
      };
    } catch (error) {
      return { statusCode: error.response.status, msg: error.response.data };
    }
  }
);

export const deleteRoom = createAsyncThunk("rooms/delete", async (id) => {
  try {
    const response = await axios.delete(url + `/rooms/delete/${id}`);
    return {
      statusCode: response.status,
      msg: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});
