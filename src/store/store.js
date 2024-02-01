import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/userSlice";
import eventReducer from "../features/eventSlice"

const store = configureStore({
    reducer:{
       user:userReducer,
       event:eventReducer
    }
})

export default store;