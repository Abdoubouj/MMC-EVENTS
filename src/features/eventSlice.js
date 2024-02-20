import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { linkAPI } from "./data.js";

export const getEvents = createAsyncThunk("Event/getEvents", async () => {
  const response = await axios.get(linkAPI + "Event");
  return response.data;
});

export const getEventById = createAsyncThunk("Event/getEventById", async (eventID) => {
  const response = await axios.get(linkAPI + `Event/${eventID}`);
  return response.data;
});

export const postEvents = createAsyncThunk(
  "Events/postEvents",
  async (event) => {
    const response = await axios.post(linkAPI + "Event", event);
    console.log(response);
    return response.data;
  }
);

export const deleteEvents = createAsyncThunk(
  "Events/deleteEvents",
  async (eventID) => {
    const response = await axios.delete(linkAPI + `Event/${eventID}`);
    console.log(response);
    return response.data;
  }
);
export const updateEvents = createAsyncThunk(
  "Events/updateEvents",
  async (newEvent) => {
    const response = await axios.put(
      linkAPI + `Event/${newEvent.eventID}`,
      newEvent
    );
    return response.data;
  }
);

const initialState = {
  events: [],
  singleEvent: [],
  eventsStatus: "idle",
  eventsError: null,
};

const eventSlice = createSlice({
  name: "Event",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.events = state.events.filter(
        (event) => event.title === action.payload.title
      );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getEvents.pending, (state) => {
        state.eventsStatus = "loading";
      })
      .addCase(getEvents.fulfilled, (state, action) => {
        state.eventsStatus = "succeded";
        state.events = action.payload;
      })
      .addCase(getEvents.rejected, (state, action) => {
        state.eventsStatus = "failed";
        state.eventsError = action.error.message;
      })
      .addCase(postEvents.pending, (state) => {
        state.eventsStatus = "loading";
      })
      .addCase(postEvents.fulfilled, (state, action) => {
        state.eventsStatus = "succeded";
        state.events.push(action.payload);
      })
      .addCase(postEvents.rejected, (state, action) => {
        state.eventsStatus = "failed";
        state.eventsError = action.error.message;
      })
      .addCase(deleteEvents.pending, (state) => {
        state.eventsStatus = "loading";
      })
      .addCase(deleteEvents.fulfilled, (state, action) => {
        state.eventsStatus = "succeded";
        state.events = state.events.filter(
          (event) => event.eventID !== action.meta.arg
        );
      })
      .addCase(deleteEvents.rejected, (state, action) => {
        state.eventsStatus = "failed";
        state.eventsError = action.error.message;
      })
      .addCase(updateEvents.pending, (state) => {
        state.eventsStatus = "loading";
      })
      .addCase(updateEvents.fulfilled, (state, action) => {
        state.eventsStatus = "succeded";
        const index = state.events.findIndex(
          (event) => event.eventID === action.payload.eventID
        );
        state.events[index] = action.payload;
      })
      .addCase(updateEvents.rejected, (state, action) => {
        state.eventsStatus = "failed";
        state.eventsError = action.error.message;
      })
      .addCase(getEventById.pending, (state) => {
        state.eventsStatus = "loading";
      })
      .addCase(getEventById.fulfilled, (state, action) => {
        state.eventsStatus = "succeded";
        state.singleEvent = action.payload;
      })
      .addCase(getEventById.rejected, (state, action) => {
        state.eventsStatus = "failed";
        state.eventsError = action.error.message;
      });
  },
});

export const { filter } = eventSlice.actions;

export default eventSlice.reducer;
