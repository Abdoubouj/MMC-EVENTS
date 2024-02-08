import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { linkAPI } from "./data";

export const getSessions = createAsyncThunk("Session/getSessions", async () => {
  const response = await axios.get(linkAPI);
  return response.data;
});

export const postSessions = createAsyncThunk(
  "Session/postSessions",
  async (session) => {
    const response = await axios.post(linkAPI, session);
    console.log(response);
    return response.data;
  }
);

export const deleteSessions = createAsyncThunk(
  "Session/deleteSessions",
  async (sessionId) => {
    const response = await axios.delete(linkAPI + `/${sessionId}`);
    console.log(response);
    return response.data;
  }
);

export const getSessionsByEvent = createAsyncThunk(
  "Session/getSessionsByEvent",
  async (eventId) => {
    const response = await axios.get(linkAPI + `/event/${eventId}`);
    return response.data;
  }
);

const initialState = {
  sessions: [],
  sessionsEvent: [],
  sessionsStatus: "idle",
  sessionsError: null,
};

const sessionSlice = createSlice({
  name: "Session",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSessions.pending, (state) => {
        state.sessionsStatus = "loading";
      })
      .addCase(getSessions.fulfilled, (state, action) => {
        state.sessionsStatus = "succeded";
        state.sessions = action.payload;
      })
      .addCase(getSessions.rejected, (state, action) => {
        state.sessionsStatus = "failed";
        state.sessionsError = action.error.message;
      })
      .addCase(postSessions.pending, (state) => {
        state.sessionsStatus = "loading";
      })
      .addCase(postSessions.fulfilled, (state, action) => {
        state.sessionsStatus = "succeded";
        state.sessions.push(action.payload);
      })
      .addCase(postSessions.rejected, (state, action) => {
        state.sessionsStatus = "failed";
        state.sessionsError = action.error.message;
      })
      .addCase(deleteSessions.pending, (state) => {
        state.sessionsStatus = "loading";
      })
      .addCase(deleteSessions.fulfilled, (state, action) => {
        state.sessionsStatus = "succeded";
        state.sessions = state.sessions.filter(
          (session) => session.id !== action.meta.arg
        );
      })
      .addCase(deleteSessions.rejected, (state, action) => {
        state.sessionsStatus = "failed";
        state.sessionsError = action.error.message;
      })
      .addCase(getSessionsByEvent.pending, (state) => {
        state.sessionsStatus = "loading";
      })
      .addCase(getSessionsByEvent.fulfilled, (state, action) => {
        state.sessionsStatus = "succeded";
        state.sessionsEvent = action.payload;
      })
      .addCase(getSessionsByEvent.rejected, (state, action) => {
        state.sessionsStatus = "failed";
        state.sessionsError = action.error.message;
      });
  },
});

export default sessionSlice.reducer;
