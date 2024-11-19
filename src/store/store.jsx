import { configureStore } from "@reduxjs/toolkit";
import  userProfileReducer  from "./slices/slicer";

const store = configureStore({reducer:{userProfile:userProfileReducer}})
export default store