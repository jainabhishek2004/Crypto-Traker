import { configureStore } from "@reduxjs/toolkit"
import cryptoReducer from "./features/crypto-slice"
import { setupListeners } from "@reduxjs/toolkit/query"

export const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
