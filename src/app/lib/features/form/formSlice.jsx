import { createSlice } from "@reduxjs/toolkit";

export const formSlice = createSlice({
  name: "form",
  initialState: {
    value: "",
  },
  reducers: {
    saveForm: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { saveForm } = formSlice.actions;

export default formSlice.reducer;
