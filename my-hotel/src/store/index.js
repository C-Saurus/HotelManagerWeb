import { configureStore } from "@reduxjs/toolkit";
import { themeSlice } from "../service/themeSlice";
import { authSlice } from "../service/authSlice";
import { bookingSlice } from "../service/bookingSlice";
import { userSlice } from "../service/userSlice";

const store = configureStore({
  reducer: {
    theme: themeSlice.reducer,
    auth: authSlice.reducer,
    booking: bookingSlice.reducer,
    user: userSlice.reducer,
  },
});

export default store;
