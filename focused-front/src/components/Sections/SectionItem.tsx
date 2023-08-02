import React from 'react'
import {
	SectionName,
	SectionColumn,
	SectionHeader,
	SectionTasks
} from './SectionsStyles'
import Task from '../Task'

const SectionItem = () => {
	const tasks = [1, 2, 3, 4, 5]

	return (
		<SectionColumn>
			<SectionHeader>
				<SectionName>To Do</SectionName>
				<SectionTasks>{tasks.length}</SectionTasks>
			</SectionHeader>
			<Task />
		</SectionColumn>
	)
}

export default SectionItem
