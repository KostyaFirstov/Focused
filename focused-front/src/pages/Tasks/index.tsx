import React from 'react'
import axios from '../../axios'
import { useDispatch } from 'react-redux'
import { MainHeading } from '../../styles/globalStyle'
import Sections, { SectionItemsProps } from '../../components/Sections'
import { TasksAdd, TasksHeader, TasksOptions } from './TasksStyles'
import { grayColor, primaryBrandColor } from '../../styles/variables'
import useOutsideClick from '../../hooks/useOutsideClick'
import CreateTask from '../../components/Task/CreateTask'
import { useAppDispatch } from '../../redux/store'
import { useSelector } from 'react-redux'
import {
	fetchSections,
	selectSections,
	setColumns
} from '../../redux/slices/tasksSlice'
import { selectAccount } from '../../redux/slices/authSlice'
import { DragDropContext, DropResult } from 'react-beautiful-dnd'

const Tasks = () => {
	const [modal, setModal] = React.useState(false)
	const openModalRef = React.useRef(null)
	const modalRef = React.useRef(null)

	const dispatch = useDispatch()
	const appDispatch = useAppDispatch()
	const sections = useSelector(selectSections)
	const data = useSelector(selectAccount)

	React.useEffect(() => {
		if (data) {
			appDispatch(fetchSections({ id: data._id, project: 'personal' }))
		}
	}, [])

	useOutsideClick([openModalRef, modalRef], () => {
		setModal(false)
	})

	const onSetModal = () => {
		setModal(prev => !prev)
	}

	const onDragEnd = (result: DropResult) => {
		const { source, destination, type } = result

		if (!destination) return
		if (
			destination.droppableId === source.droppableId &&
			destination.index === source.index
		)
			return

		if (type === 'group') {
			const reorderedStores = [...sections[0].sections]
			const sourceIndex = source.index
			const destinationIndex = destination.index

			const [removedStore] = reorderedStores.splice(sourceIndex, 1)
			reorderedStores.splice(destinationIndex, 0, removedStore)

			const resultSection = { ...sections[0], sections: reorderedStores }

			return dispatch(setColumns([resultSection]))
		} else if (source.droppableId !== destination.droppableId) {
			const sourceSection = sections[0].sections.find(
				section => section._id === source.droppableId
			)
			const sourceIndexSection = sections[0].sections.findIndex(
				section => section._id === source.droppableId
			)

			const destSection = sections[0].sections.find(
				section => section._id === destination.droppableId
			)
			const destIndexSection = sections[0].sections.findIndex(
				section => section._id === destination.droppableId
			)

			const sourceItems = sourceSection ? [...sourceSection?.items] : []
			const destItems = destSection ? [...destSection?.items] : []

			const [removed] = sourceItems?.splice(source.index, 1)
			destItems.splice(destination.index, 0, removed)

			const resultSection = {
				[sourceIndexSection]: {
					...sourceSection,
					items: sourceItems
				},
				[destIndexSection]: {
					...destSection,
					items: destItems
				}
			}

			const res = Object.keys(resultSection).map(
				(key: any) => resultSection[key]
			)

			dispatch(setColumns([{ ...sections[0], sections: res }]))
		} else {
			const sectionSourceIndex = sections[0].sections.findIndex(
				section => section._id === source.droppableId
			)
			const sectionDestinationIndex = sections[0].sections.findIndex(
				section => section._id === destination.droppableId
			)
			const newSourceItems = [...sections[0].sections[sectionSourceIndex].items]

			const newDestinationItems =
				source.droppableId !== destination.droppableId
					? [...sections[0].sections[sectionDestinationIndex].items]
					: newSourceItems

			const [deletedItem] = newSourceItems.splice(source.index, 1)
			newDestinationItems.splice(destination.index, 0, deletedItem)

			const newStores = [...sections[0].sections]

			newStores[sectionSourceIndex] = {
				...sections[0].sections[sectionSourceIndex],
				items: newSourceItems
			}

			newStores[sectionDestinationIndex] = {
				...sections[0].sections[sectionDestinationIndex],
				items: newSourceItems
			}

			const result = { ...sections[0], sections: newStores }
			dispatch(setColumns([result]))
		}

		const updateSections = async () => {}
	}

	return (
		<DragDropContext onDragEnd={onDragEnd}>
			<TasksHeader>
				<MainHeading>Ваши задачи, Anima</MainHeading>
				<TasksOptions>
					<TasksAdd
						ref={openModalRef}
						onClick={onSetModal}
						$color={primaryBrandColor}
					>
						Добавить задачу
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								opacity='0.2'
								d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z'
								fill='#3EC091'
							/>
							<path
								d='M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z'
								fill='#3EC091'
							/>
						</svg>
					</TasksAdd>
					<TasksAdd $color={grayColor}>
						Добавить секцию
						<svg
							width='24'
							height='24'
							viewBox='0 0 24 24'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								opacity='0.2'
								d='M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z'
								fill='#4D4C53'
							/>
							<path
								d='M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z'
								fill='#4D4C53'
							/>
						</svg>
					</TasksAdd>
				</TasksOptions>
			</TasksHeader>
			<Sections />
			{modal && <CreateTask modalRef={modalRef} onSetModal={onSetModal} />}
		</DragDropContext>
	)
}

export default Tasks
