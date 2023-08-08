import React from 'react'
import { ScrollToTop } from './utils/ScrollToTop'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import Diary from './pages/Diary'
import Tasks from './pages/Tasks'
import Focus from './pages/Focus'
import Calendar from './pages/Calendar'
import Settings from './pages/Settings'
import Projects from './pages/Projects'
import ProjectPage from './pages/ProjectPage'
import Statistics from './pages/Statistics'
import Profile from './pages/Profile'
import Login from './pages/Auth/Login'
import Register from './pages/Auth/Register'
import JoinLayout from './layouts/JoinLayout'

function App() {
	return (
		<div className='app'>
			<ScrollToTop />
			<Routes>
				<Route path='/' element={<MainLayout />}>
					<Route path='/' element={<Main />} />
					<Route path='/diary' element={<Diary />} />
					<Route path='/tasks' element={<Tasks />} />
					<Route path='/focus' element={<Focus />} />
					<Route path='/calendar' element={<Calendar />} />
					<Route path='/settings' element={<Settings />} />
					<Route path='/profile' element={<Profile />} />
					<Route path='/projects' element={<Projects />} />
					<Route path='/statistics' element={<Statistics />} />
					<Route path='/projects/:id' element={<ProjectPage />} />
				</Route>
				<Route path='/' element={<JoinLayout />}>
					<Route path='/login' element={<Login />} />
					<Route path='/register' element={<Register />} />
				</Route>
			</Routes>
		</div>
	)
}

export default App
