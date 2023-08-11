import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import axios from '../../axios'
import { LoadingProperty } from './authSlice'
import { RootState } from '../store'
import { SectionItemsProps } from '../../components/Sections'

type FetchTaks = {
	id: number
	project: string
}

export const fetchSections = createAsyncThunk(
	'auth/fetchSections',
	async (info: FetchTaks) => {
		const { data } = await axios.get<SectionItemsProps[]>(
			`/sections?user=${info.id}&project=${info.project}`
		)
		return data
	}
)

export interface TasksState {
	sections: SectionItemsProps[]
	status: LoadingProperty
}

const initialState: TasksState = {
	sections: [],
	status: LoadingProperty.STATUS_LOADING
}

export const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		setColumns: (state, action) => {
			state.sections = action.payload
		}
	},
	extraReducers: builder => {
		// FECTCH SECTIONS

		builder.addCase(fetchSections.pending, state => {
			state.status = LoadingProperty.STATUS_LOADING
			state.sections = []
		})

		builder.addCase(
			fetchSections.fulfilled,
			(state, action: PayloadAction<SectionItemsProps[]>) => {
				state.status = LoadingProperty.STATUS_LOADED
				state.sections = action.payload
			}
		)

		builder.addCase(fetchSections.rejected, state => {
			state.status = LoadingProperty.STATUS_ERROR
			state.sections = []
		})
	}
})

export const selectSections = (state: RootState) => state.tasks.sections

export const { setColumns } = tasksSlice.actions
export default tasksSlice.reducer
