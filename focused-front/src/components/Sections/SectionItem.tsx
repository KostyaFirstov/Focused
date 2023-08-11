import React from 'react'
import {
	SectionName,
	SectionColumn,
	SectionHeader,
	SectionTasks,
	SectionLeft,
	SectionRight,
	SectionOptions,
	SectionAdd,
	SectionAmount,
	SectionOptionsOpen
} from './SectionsStyles'
import Task, { TaskProps } from '../Task'
import OptionsWindow from '../OptionsWindow'
import { OptionsItem } from '../OptionsWindow/OptionsWindowStyles'
import useOutsideClick from '../../hooks/useOutsideClick'
import { Droppable } from 'react-beautiful-dnd'

export interface SectionItemProps {
	_id: string
	title: string
	color: string
	items: TaskProps[]
}

const SectionItem: React.FC<SectionItemProps> = ({
	_id,
	title,
	color,
	items
}) => {
	const [options, setOptions] = React.useState(false)
	const optionsRef = React.useRef(null)

	const sectionOptions = [
		{ text: 'Переместить', func: '' },
		{ text: 'Изменить', func: '' },
		{ text: 'Удалить', func: '' }
	]

	useOutsideClick([optionsRef], () => {
		setOptions(false)
	})

	const onSetOptions = () => {
		setOptions(prev => !prev)
	}

	return (
		<Droppable droppableId={_id}>
			{provided => (
				<SectionColumn
					$color={color}
					ref={provided.innerRef}
					{...provided.droppableProps}
				>
					<SectionHeader>
						<SectionLeft>
							<SectionName>{title}</SectionName>
							<SectionAmount>{items.length}</SectionAmount>
						</SectionLeft>
						<SectionRight>
							<SectionAdd>
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
							</SectionAdd>
							<SectionOptions ref={optionsRef}>
								<SectionOptionsOpen onClick={onSetOptions}>
									<svg
										width='5'
										height='15'
										viewBox='0 0 5 15'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M0.432421 13.1293L0.432421 12.7308C0.441328 12.6985 0.455859 12.6694 0.461952 12.6371C0.590859 11.799 1.28789 11.1371 2.10539 11.0813C3.01945 11.0171 3.79289 11.5383 4.04461 12.3877C4.07695 12.4993 4.10039 12.6165 4.12945 12.7304L4.12945 13.1288C4.12055 13.1551 4.10602 13.1785 4.1032 13.208C3.97711 13.9815 3.4207 14.5702 2.65898 14.7371C2.60039 14.7488 2.5418 14.7666 2.4832 14.7812L2.08476 14.7812C2.05851 14.7723 2.0318 14.7577 2.00555 14.7549C1.24383 14.6321 0.663515 14.0898 0.487734 13.3369C0.469921 13.2638 0.449765 13.1963 0.431953 13.1288L0.432421 13.1293ZM4.12992 1.86757L4.12992 2.26601C4.12102 2.29835 4.10648 2.32741 4.10367 2.35976C3.97195 3.20351 3.27164 3.86257 2.4457 3.91554C1.53445 3.97413 0.763828 3.44679 0.514922 2.59413C0.482578 2.48585 0.45914 2.37429 0.43289 2.26601L0.43289 1.86757C0.441796 1.84132 0.456328 1.81788 0.462422 1.79163C0.603047 1.02991 1.04555 0.531631 1.78383 0.294443C1.88039 0.2621 1.98305 0.244756 2.08242 0.218506L2.48086 0.218506C2.50711 0.227412 2.53383 0.241943 2.56008 0.244756C3.32461 0.37085 3.90211 0.909912 4.07789 1.66272C4.09523 1.73304 4.11305 1.80054 4.13086 1.86757L4.12992 1.86757ZM4.12992 7.29944L4.12992 7.69788C4.12102 7.73022 4.10648 7.75929 4.10039 7.79163C3.96867 8.63257 3.24211 9.30944 2.4218 9.3446C1.49883 9.38538 0.716953 8.82897 0.497109 7.97069C0.473672 7.87976 0.453046 7.78929 0.43289 7.69835L0.43289 7.29991C0.441796 7.26757 0.456328 7.23851 0.462422 7.20616C0.591328 6.36522 1.3207 5.68835 2.14102 5.65038C3.06398 5.60632 3.84586 6.16601 4.0657 7.02429C4.08914 7.11804 4.10977 7.20897 4.12992 7.29991L4.12992 7.29944Z'
											fill='#4D4C53'
										/>
									</svg>
								</SectionOptionsOpen>
								<OptionsWindow isOpen={options} openWindow={onSetOptions}>
									{sectionOptions.map((item, index) => (
										<OptionsItem key={index}>{item.text}</OptionsItem>
									))}
								</OptionsWindow>
							</SectionOptions>
						</SectionRight>
					</SectionHeader>
					<SectionTasks>
						{items.map((task, index) => (
							<Task key={task._id} {...task} index={index} section={title} />
						))}
					</SectionTasks>
					{provided.placeholder}
				</SectionColumn>
			)}
		</Droppable>
	)
}

export default SectionItem
