import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getSessions = createAsyncThunk("Session/getSessions",async()=>{
    const response = await axios.get('https://retoolapi.dev/yNxheq/sessions');
    return response.data;
})

export const postSessions = createAsyncThunk("Session/postSessions",async(session)=>{
   const response = await axios.post('https://retoolapi.dev/yNxheq/sessions',session);
   console.log(response);
   return response.data;
})

export const deleteSessions = createAsyncThunk("Session/deleteSessions",async(sessionId)=>{
   const response = await axios.delete(`https://retoolapi.dev/yNxheq/sessions/${sessionId}`);
   console.log(response);
   return response.data;
})

const initialState = {
    sessions:[],
    sessionsStatus:"idle",
    sessionsError:null
}

const sessionSlice = createSlice({
    name:"Session",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder
        .addCase(getSessions.pending , (state)=>{
            state.sessionsStatus = "loading";
        })
        .addCase(getSessions.fulfilled , (state,action)=>{
            state.sessionsStatus = "succeded";
            state.sessions = action.payload;
        })
        .addCase(getSessions.rejected,(state,action)=>{
            state.sessionsStatus = "failed";
            state.sessionsError = action.error.message;
        })
        .addCase(postSessions.pending , (state)=>{
            state.sessionsStatus = "loading";
        })
        .addCase(postSessions.fulfilled , (state,action)=>{
            state.sessionsStatus = "succeded";
            state.sessions.push(action.payload);
        })
        .addCase(postSessions.rejected,(state,action)=>{
            state.sessionsStatus = "failed";
            state.sessionsError = action.error.message;
        })
        .addCase(deleteSessions.pending , (state)=>{
            state.sessionsStatus = "loading";
        })
        .addCase(deleteSessions.fulfilled , (state,action)=>{
            state.sessionsStatus = "succeded";
            state.sessions = state.sessions.filter((session)=>session.id !== action.meta.arg);
        })
        .addCase(deleteSessions.rejected,(state,action)=>{
            state.sessionsStatus = "failed";
            state.sessionsError = action.error.message;
        })
    }
})


export default sessionSlice.reducer;