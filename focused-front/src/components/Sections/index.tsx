import React from 'react'
import { SectionsWrapper } from './SectionsStyles'
import SectionItem from './SectionItem'
import { useSelector } from 'react-redux'
import { selectSections } from '../../redux/slices/tasksSlice'
import { TaskProps } from '../Task'
import { Draggable, Droppable } from 'react-beautiful-dnd'

export interface SectionItemsProps {
	_id: string
	sections: {
		_id: string
		title: string
		color: string
		items: TaskProps[]
	}[]
}

const Sections = () => {
	const sections = useSelector(selectSections)

	return (
		<Droppable droppableId='ROOT' type='group'>
			{provided => (
				<SectionsWrapper {...provided.droppableProps} ref={provided.innerRef}>
					{sections[0] &&
						sections[0].sections.map((section, index) => (
							<Draggable
								key={section._id}
								draggableId={section._id}
								index={index}
							>
								{provided => (
									<div
										{...provided.dragHandleProps}
										{...provided.draggableProps}
										ref={provided.innerRef}
									>
										<SectionItem {...section} />
									</div>
								)}
							</Draggable>
						))}
					{provided.placeholder}
				</SectionsWrapper>
			)}
		</Droppable>
	)
}

export default Sections
