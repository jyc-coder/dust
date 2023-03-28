import { defaultListboxReducer } from '@mui/base'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { dustApi } from './../apis/axios'
import dustReducer from './slices/dust'
const rootReducer = combineReducers({
    [dustApi.reducerPath]: dustApi.reducer,
    dust: dustReducer,
})
const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(dustApi.middleware),
})
setupListeners(store.dispatch)

export default store
