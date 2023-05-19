import { combineReducers } from "@reduxjs/toolkit";
import moviesReducers from "./moviesReducers";
import authReducers from "./authReducers";

// We will have some reducers here
export default combineReducers({
  movies: moviesReducers,
  auth: authReducers,
});
