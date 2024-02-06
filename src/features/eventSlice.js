import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getEvents = createAsyncThunk("Event/getEvents",async()=>{
    const response = await axios.get('https://retoolapi.dev/EZRFa1/events');
    return response.data;
})

export const postEvents = createAsyncThunk("Events/postEvents",async(event)=>{
   const response = await axios.post('https://retoolapi.dev/EZRFa1/events',event);
   console.log(response);
   return response.data;
})

export const deleteEvents = createAsyncThunk("Events/deleteEvents",async(eventId)=>{
   const response = await axios.delete(`https://retoolapi.dev/EZRFa1/events/${eventId}`);
   console.log(response);
   return response.data;
})
export const updateEvents = createAsyncThunk("Events/updateEvents",async(newEvent)=>{
    const response = await axios.put(`https://retoolapi.dev/EZRFa1/events/${newEvent.id}`,newEvent);
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
        builder
        .addCase(getEvents.pending , (state)=>{
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
        .addCase(postEvents.pending , (state)=>{
            state.eventsStatus = "loading";
        })
        .addCase(postEvents.fulfilled , (state,action)=>{
            state.eventsStatus = "succeded";
            state.events.push(action.payload);
        })
        .addCase(postEvents.rejected,(state,action)=>{
            state.eventsStatus = "failed";
            state.eventsError = action.error.message;
        })
        .addCase(deleteEvents.pending , (state)=>{
            state.eventsStatus = "loading";
        })
        .addCase(deleteEvents.fulfilled , (state,action)=>{
            state.eventsStatus = "succeded";
            state.events = state.events.filter((event)=>event.id !== action.meta.arg);
        })
        .addCase(deleteEvents.rejected,(state,action)=>{
            state.eventsStatus = "failed";
            state.eventsError = action.error.message;
        })
        .addCase(updateEvents.pending , (state)=>{
            state.eventsStatus = "loading";
        })
        .addCase(updateEvents.fulfilled , (state,action)=>{
            state.eventsStatus = "succeded";
            const index = state.events.findIndex((event)=>event.id === action.payload.id);
            state.events[index] = action.payload;
        })
        .addCase(updateEvents.rejected,(state,action)=>{
            state.eventsStatus = "failed";
            state.eventsError = action.error.message;
        })
    }
})


export default eventSlice.reducer;