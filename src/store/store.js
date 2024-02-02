import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import eventReducer from "../features/eventSlice"
import speakerReducer from "../features/speakerSlice"
const store = configureStore({
    reducer:{
       user:userReducer,
       event:eventReducer,
       speaker:speakerReducer
    }
})

export default store;