import { configureStore } from "@reduxjs/toolkit";

import logger from "redux-logger";
import ApiReducer from "../reducers/ApiReducer";

export const store = configureStore({
  reducer: {
    apireducer: ApiReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
