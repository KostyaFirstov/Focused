import { combineReducers, configureStore } from '@reduxjs/toolkit'
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import auth from './slices/authSlice'
import tasks from './slices/tasksSlice'
import { useDispatch } from 'react-redux'

const persistConfig = {
	key: 'root',
	version: 1,
	storage
}

const persistedReducer = persistReducer(persistConfig, auth)

export const store = configureStore({
	reducer: { persistedReducer, tasks },
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware({
			serializableCheck: {
				ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
			}
		})
})

export let persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
