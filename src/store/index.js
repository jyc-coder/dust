import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dustApi } from './apis/axios'
import dustReducer from './slices/dust'
import { locationSlice } from './slices/locationSlice'
import { favoriteSlice } from './slices/favoriteSlice'

const rootReducer = combineReducers({
    [dustApi.reducerPath]: dustApi.reducer,
    [locationSlice.name]: locationSlice.reducer,
    [favoriteSlice.name]: favoriteSlice.reducer,
    dust: dustReducer,
})
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dustApi.middleware),
})
setupListeners(store.dispatch)

export default store
