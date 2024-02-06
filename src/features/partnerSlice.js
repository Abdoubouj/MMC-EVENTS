import {createSlice,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios"

export const getPartners = createAsyncThunk("Partner/getPartners",async()=>{
    const response = await axios.get('https://retoolapi.dev/vVfCd0/partners');
    return response.data;
})


const initialState = {
    partners:[],
    partnersStatus:"idle",
    partnersError:null
}

const partnerSlice = createSlice({
    name:"Partner",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getPartners.pending , (state)=>{
            state.partnersStatus = "loading";
        })
        .addCase(getPartners.fulfilled , (state,action)=>{
            state.partnersStatus = "succeded";
            state.partners = action.payload;
        })
        .addCase(getPartners.rejected,(state,action)=>{
            state.partnersStatus = "failed";
            state.partnersError = action.error.message;
        })
    }
})


export default partnerSlice.reducer;