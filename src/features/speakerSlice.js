import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getSpeakers = createAsyncThunk("Speakers/getSpeakers",async()=>{
    const response = await axios.get('https://retoolapi.dev/tv8nGU/speakers');
    return response.data;
})

export const DeleteSpeaker = createAsyncThunk("Speakers/DeleteSpeaker",async(id)=>{
    const response = await axios.delete(`https://retoolapi.dev/tv8nGU/speakers/${id}`);
    return response.data;
})


const initialState = {
    speakers:[],
    speakersStatus:"idle",
    speakersError:null
}

const speakerSlice = createSlice({
    name:"Speaker",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getSpeakers.pending , (state)=>{
            state.speakersStatus = "loading";
        })
        .addCase(getSpeakers.fulfilled , (state,action)=>{
            state.speakersStatus = "succeded";
            state.speakers = action.payload;
        })
        .addCase(getSpeakers.rejected,(state,action)=>{
            state.speakersStatus = "failed";
            state.speakersError = action.error.message;
        })
        .addCase(DeleteSpeaker.pending , (state)=>{
            state.speakersStatus = "loading";
        })
        .addCase(DeleteSpeaker.fulfilled , (state,action)=>{
            state.speakersStatus = "succeded";
            state.speakers = action.payload;
        })
        .addCase(DeleteSpeaker.rejected,(state,action)=>{
            state.speakersStatus = "failed";
            state.speakersError = action.error.message;
        })
    }
})


export default speakerSlice.reducer;