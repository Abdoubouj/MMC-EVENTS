import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getEvents = createAsyncThunk("Event/setEvents",async()=>{
    const response = await axios.get('https://retoolapi.dev/K9VpcZ/events');
    return response.data;
})


const initialState = {
    events:[],
    eventsStatus:"idle",
    eventsError:null
}

const eventSlice = createSlice({
    name:"Event",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getEvents.pending , (state)=>{
            state.eventsStatus = "loading";
        })
        .addCase(getEvents.fulfilled , (state,action)=>{
            state.eventsStatus = "succeded";
            state.events = action.payload;
        })
        .addCase(getEvents.rejected,(state,action)=>{
            state.eventsStatus = "failed";
            state.eventsError = action.error.message;
        })
    }
})


export default eventSlice.reducer;