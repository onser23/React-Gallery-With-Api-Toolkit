import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loader: false,
  error: "",
  searcedText: "",
  previewImages: [],
};

export const ApiReducer = createSlice({
  name: "apireducer",
  initialState,
  reducers: {
    ApiCallStart: (state) => {
      state.loader = true;
    },
    ApiSuccess: (state, action) => {
      state.loader = false;
      state.data = action.payload;
    },
    ApiFailure: (state, action) => {
      state.loader = false;
      state.error = action.payload;
    },
    SearchedText: (state, action) => {
      state.searcedText = action.payload;
    },
    PreviewImages: (state, action) => {
      state.previewImages = action.payload;
    },
  },
});

export const {
  ApiCallStart,
  ApiSuccess,
  ApiFailure,
  SearchedText,
  PreviewImages,
} = ApiReducer.actions;

export default ApiReducer.reducer;
