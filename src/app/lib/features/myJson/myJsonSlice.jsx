import { createSlice } from "@reduxjs/toolkit";
import Data from "../../../../../json/data.json"

export const jsonSlice = createSlice({
  name: "json",
  initialState: {
    value: Data,
  },
  reducers: {
    
  },
});

export const { } = jsonSlice.actions;

export default jsonSlice.reducer;
