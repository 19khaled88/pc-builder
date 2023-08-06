import { configureStore} from '@reduxjs/toolkit'
import { BuilderSlice } from './features/builderSlice'
import { pcBuilderApi } from './api/builder'
// import { pcBuilderApi } from './api/builder'
// import { BuilderSlice } from './features/builderSlice'

export const store = configureStore({
  reducer: {
    // builder:BuilderSlice.reducer,
    builder:BuilderSlice.reducer,
    // [pcBuilderApi.reducerPath]:pcBuilderApi.reducer
    [pcBuilderApi.reducerPath]:pcBuilderApi.reducer
  },

  middleware:(getDefaultMiddleware)=>getDefaultMiddleware({}).concat(pcBuilderApi.middleware)
})