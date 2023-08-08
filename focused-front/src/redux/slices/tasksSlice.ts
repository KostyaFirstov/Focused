import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { TaskProps } from '../../components/Task'
import axios from '../../axios'
import { LoadingProperty } from './authSlice'
import { RootState } from '../store'

export const fetchTasks = createAsyncThunk(
	'auth/fetchTasks',
	async (id: number) => {
		const { data } = await axios.get<TaskProps[]>(`/tasks/${id}`)
		return data
	}
)

export interface TasksState {
	items: TaskProps[]
	status: LoadingProperty
}

const initialState: TasksState = {
	items: [],
	status: LoadingProperty.STATUS_LOADING
}

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {},
	extraReducers: builder => {
		// FETCH TASKS

		builder.addCase(fetchTasks.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.items = []
		})

		builder.addCase(
			fetchTasks.fulfilled,
			(state, action: PayloadAction<TaskProps[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.items = action.payload
			}
		)

		builder.addCase(fetchTasks.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.items = []
		})
	}
})

export const selectTasks = (state: RootState) => state.tasks.items

export const {} = tasksSlice.actions
export default tasksSlice.reducer
