import React from 'react'
import { MainHeading } from '../styles/globalStyle'
import Task from '../components/Task'
import Sections from '../components/Sections'

const Tasks = () => {
	return (
		<>
			<MainHeading>Ваши задачи, Anima</MainHeading>
			<Sections />
		</>
	)
}

export default Tasks
