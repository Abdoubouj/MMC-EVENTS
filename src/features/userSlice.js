import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { linkAPI } from "./data";

export const getUsers = createAsyncThunk("User/getUsers", async () => {
  const response = await axios.get(linkAPI + "User/All");
  return response.data;
});

export const DeleteUsers = createAsyncThunk(
  "User/DeleteUsers",
  async (userID) => {
    const response = await axios.delete(linkAPI + "User" + `/${userID}`);
    return response.data;
  }
);

export const AddNewUser = createAsyncThunk(
  "User/AddNewUser",
  async (newUser) => {
    try {
      const response = await axios.post(linkAPI + "User/", newUser);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);


export const UpdateUser = createAsyncThunk("User/UpdateUser", async (user) => {
  
  const response = await axios.put(linkAPI + "User" + `/${user.userID}`, user);

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
      })

      .addCase(DeleteUsers.rejected, (state, action) => {
        state.usersStatus = "failed";
        state.usersError = action.error.message;
      })
      .addCase(DeleteUsers.pending, (state) => {
        state.usersStatus = "loading";
      })
      .addCase(DeleteUsers.fulfilled, (state, action) => {
        state.usersStatus = "succeeded";

        state.users = state.users.filter(
          (user) => user.userID !== action.meta.arg
        );
      })

      .addCase(AddNewUser.pending, (state) => {
        state.usersStatus = "loading";
      })
      .addCase(AddNewUser.fulfilled, (state, action) => {
        state.usersStatus = "succeeded";
        state.users.push(action.meta.arg);
      })
      .addCase(AddNewUser.rejected, (state, action) => {
        state.usersStatus = "failed";
        state.usersError = action.error.message;
      })

      .addCase(UpdateUser.pending, (state) => {
        state.usersStatus = "loading";
      })
      .addCase(UpdateUser.fulfilled, (state, action) => {
        state.usersStatus = "succeeded";
        console.log("==================action==================");
        console.log(action);
        console.log("====================================");
        const index = state.users.findIndex(
          (user) => user.userID === action.payload.userID
        );
        if (index !== -1) {

          state.users[index] = action.payload;
          console.log('==================Update==================');
          console.log(action.payload);
          console.log('====================================');
        }
      })

      .addCase(UpdateUser.rejected, (state, action) => {
        state.usersStatus = "failed";
        state.usersError = action.error.message;
      });
  },
});

export default userSlice.reducer;
