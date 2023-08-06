import React from 'react'
import { SectionsWrapper } from './SectionsStyles'
import SectionItem from './SectionItem'

const Sections = () => {
	return (
		<SectionsWrapper>
			{/* {sectionsItems.map((item) => <SectionItem name='To Do' color='#4D4C53' tasks={[1, 2, 3, 4, 5]} />)} */}
			<SectionItem name='To Do' color='#4D4C53' tasks={[1, 2, 3, 4, 5]} />
			<SectionItem name='In Progress' color='#FBCB18' tasks={[1, 2, 3, 4, 5]} />
			<SectionItem name='Done' color='#3EC091' tasks={[1, 2, 3, 4, 5]} />
		</SectionsWrapper>
	)
}

export default Sections
