import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dustApi } from './../apis/axios'

const store = configureStore({
    reducer: {
        [dustApi.reducerPath]: dustApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dustApi.middleware),
})
setupListeners(store.dispatch)

export default store
