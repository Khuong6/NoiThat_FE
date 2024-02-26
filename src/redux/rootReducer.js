import { combineReducers } from "@reduxjs/toolkit";
import counterSlice from "./feature/counterSlide";
import authenSlice from "./feature/authenSlice";

const rootReducer = combineReducers({
    counter: counterSlice,
    authen: authenSlice,
});
export default rootReducer;

