import { configureStore} from '@reduxjs/toolkit'
import { pcBuilderApi } from './api/builder'
import { BuilderSlice } from './features/builderSlice'

export const store = configureStore({
  reducer: {
    builder:BuilderSlice.reducer,
    [pcBuilderApi.reducerPath]:pcBuilderApi.reducer
  },

  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({}).concat(pcBuilderApi.middleware)
})