import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "../utils/api/local";

export const getBooking = createAsyncThunk("booking/get", async (idBooking) => {
  try {
    const response = await axios.get(url + `/bookings/get/${idBooking}`);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});

export const addBooking = createAsyncThunk("booking/add", async (data) => {
  try {
    const response = await axios.post(
      url + `/bookings/add/${data.id}`,
      data.newBooking
    );
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});
export const updateBooking = createAsyncThunk(
  "booking/update",
  async (idBooking, newBooking) => {
    try {
      const response = await axios.put(
        url + `/bookings/update/${idBooking}`,
        newBooking
      );
      return {
        statusCode: response.status,
        data: response.data,
      };
    } catch (error) {
      return { statusCode: error.response.status, msg: error.response.data };
    }
  }
);

export const payBooking = createAsyncThunk("booking/pay", async (idBooking) => {
  try {
    const response = await axios.put(url + `/bookings/pay/${idBooking}`);
    return {
      statusCode: response.status,
      data: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});
export const deleteBooking = createAsyncThunk("booking/delete", async (id) => {
  try {
    const response = await axios.put(url + `/bookings/delete/${id}`);
    return {
      statusCode: response.status,
      msg: response.data,
    };
  } catch (error) {
    return { statusCode: error.response.status, msg: error.response.data };
  }
});
