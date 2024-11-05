import { type Action, combineReducers, configureStore } from "@reduxjs/toolkit";
import { api } from "./api";

import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filtersReducer } from "./features/filters/store/filters";
import { useDispatch } from "react-redux";
import { blogsReducer } from "./features/blogs/store/blogs";
import { userReducer } from "./features/user/store/user";

const appReducer = combineReducers({
  blogs: blogsReducer,
  filters: filtersReducer,
  user: userReducer,
  [api.reducerPath]: api.reducer,
});

const rootReducer = (
  state: ReturnType<typeof appReducer> | undefined,
  action: Action
) => {
  return appReducer(state, action);
};

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(api.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
