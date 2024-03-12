import { combineReducers } from "@reduxjs/toolkit";
import authSlice from './Slice/Login/LoginSlice';
import blogSlice from './Slice/Blog/BlogSlice'

const rootReducer = combineReducers({
    auth: authSlice,
    blog:blogSlice
})


export default rootReducer;