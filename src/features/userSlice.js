import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { linkAPI } from "./data";

export const getUsers = createAsyncThunk("User/getUsers", async () => {
  const response = await axios.get("https://localhost:7187/api/Users");
  return response.data;
});

const initialState = {
  users: [],
  usersStatus: "idle",
  usersError: null,
};

const userSlice = createSlice({
  name: "User",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getUsers.pending, (state) => {
        state.usersStatus = "loading";
      })
      .addCase(getUsers.fulfilled, (state, action) => {
        state.usersStatus = "succeded";
        state.users = action.payload;
      })
      .addCase(getUsers.rejected, (state, action) => {
        state.usersStatus = "failed";
        state.usersError = action.error.message;
      });
  },
});

export default userSlice.reducer;
