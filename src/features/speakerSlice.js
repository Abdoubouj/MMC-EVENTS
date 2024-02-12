import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { linkAPI } from "./data";

export const getSpeakers = createAsyncThunk(
  "Speakers/getSpeakers",
  async () => {
    const response = await axios.get(linkAPI + "Speaker");
    return response.data;
  }
);

export const DeleteSpeaker = createAsyncThunk(
  "Speakers/DeleteSpeaker",
  async (speakerID) => {
    const response = await axios.delete(linkAPI + "Speaker" + `/${speakerID}`);
    return response.data;
  }
);

export const UpdateSpeaker = createAsyncThunk(
  "Speakers/UpdateSpeaker",
  async (speaker) => {
    const response = await axios.put(
      linkAPI + "Speaker" + `/${speaker.speakerID}`,
      speaker
    );

    return response.data;
  }
);
export const AddNewSpeaker = createAsyncThunk(
  "Speakers/AddNewSpeaker",
  async (newSpeaker) => {
    try {
      const response = await axios.post(linkAPI + "Speaker", newSpeaker);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
);

const initialState = {
  speakers: [],
  speakersStatus: "idle",
  speakersError: null,
};

const speakerSlice = createSlice({
  name: "Speaker",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getSpeakers.pending, (state) => {
        state.speakersStatus = "loading";
      })
      .addCase(getSpeakers.fulfilled, (state, action) => {
        state.speakersStatus = "succeeded";
        state.speakers = action.payload;
      })
      .addCase(getSpeakers.rejected, (state, action) => {
        state.speakersStatus = "failed";
        state.speakersError = action.error.message;
      })
      .addCase(DeleteSpeaker.pending, (state) => {
        state.speakersStatus = "loading";
      })
      .addCase(DeleteSpeaker.fulfilled, (state, action) => {
        state.speakersStatus = "succeeded";
        state.speakers = state.speakers.filter(
          (speaker) => speaker.speakerID !== action.meta.arg
        );
      })
      .addCase(DeleteSpeaker.rejected, (state, action) => {
        state.speakersStatus = "failed";
        state.speakersError = action.error.message;
      })
      .addCase(AddNewSpeaker.pending, (state) => {
        state.speakersStatus = "loading";
      })
      .addCase(AddNewSpeaker.fulfilled, (state, action) => {
        state.speakersStatus = "succeeded";
        state.speakers.push(action.meta.arg);
       
      })
      .addCase(AddNewSpeaker.rejected, (state, action) => {
        state.speakersStatus = "failed";
        state.speakersError = action.error.message;
      })
      .addCase(UpdateSpeaker.pending, (state) => {
        state.speakersStatus = "loading";
      })
      .addCase(UpdateSpeaker.fulfilled, (state, action) => {
        state.speakersStatus = "succeeded";
        const index = state.speakers.findIndex(
          (speaker) => speaker.speakerID === action.payload.speakerID
        );
        if (index !== -1) {
          state.speakers[index] = action.payload;
        }
      })

      .addCase(UpdateSpeaker.rejected, (state, action) => {
        state.speakersStatus = "failed";
        state.speakersError = action.error.message;
      });
  },
});

export default speakerSlice.reducer;
