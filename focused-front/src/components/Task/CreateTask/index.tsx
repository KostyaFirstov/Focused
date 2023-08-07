import React from 'react'
import {
	ModalNote,
	ModalNotes,
	ModalTaskContainer,
	ModalTaskDesc,
	ModalTaskList,
	ModalTaskParameter,
	ModalTaskParameterName,
	ModalProjectAdd,
	ModalTaskHeading,
	ModalTaskImages,
	ModalTaskImage,
	ModalTaskHeader,
	ModalTaskOption,
	ModalTaskOptions,
	ModalTaskComplete,
	ModalInputDesc
} from '../ModalTask/ModalTaskStyles'
import ModalWindow from '../../ModalWindow'
import { Input, MainHeading } from '../../../styles/globalStyle'
import { TaskProps } from '..'
import { SubmitHandler, useForm } from 'react-hook-form'

interface CreateTaskProps {
	onSetModal: () => void
	modalRef: React.RefObject<HTMLDivElement>
}

const CreateTask: React.FC<CreateTaskProps> = ({ modalRef, onSetModal }) => {
	const {
		register,
		handleSubmit,
		setError,
		setValue,
		formState: { errors, isValid }
	} = useForm<TaskProps>({
		mode: 'onSubmit'
	})

	const onSubmit: SubmitHandler<TaskProps> = async data => {
		const taskData = {
			title: data.title,
			desc: data.desc,
			priority: data.priority,
			project: data.project,
			section: data.section,
			deadline: data.deadline,
			images: data.images,
			notes: data.notes
		}

		console.log(taskData)
		// await axios.put(`/api/orders/${values?._id}`, orderData)
		// navigate(`/admin/orders/`)
	}

	return (
		<ModalWindow>
			<ModalTaskContainer ref={modalRef}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<ModalTaskHeader>
						<ModalTaskComplete $active={false} type='submit'>
							Сохранить
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
						</ModalTaskComplete>
						<ModalTaskOptions>
							<ModalTaskOption onClick={onSetModal} type='button'>
								<svg
									width='18'
									height='18'
									viewBox='0 0 18 18'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M17 17L9 9M9 9L1 1M9 9L17 1M9 9L1 17'
										stroke='#4D4C53'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</ModalTaskOption>
						</ModalTaskOptions>
					</ModalTaskHeader>
					<MainHeading>
						<Input
							className={errors.title && 'error'}
							type='text'
							placeholder='Полететь на марс!'
							{...register('title', {
								required: true
							})}
						/>

						{errors.title && (
							<div>Название задачи обязательно для заполнения</div>
						)}
					</MainHeading>
					<ModalTaskList>
						<ModalTaskParameter>
							<ModalTaskParameterName>Раздел</ModalTaskParameterName>{' '}
							<Input
								className={errors.section && 'error'}
								type='text'
								{...register('section', {
									required: true
								})}
							/>
							{errors.section && <div>Раздел обязателен для заполнения</div>}
						</ModalTaskParameter>
						<ModalTaskParameter>
							<ModalTaskParameterName>Приоритет</ModalTaskParameterName>
							<Input
								className={errors.priority && 'error'}
								type='text'
								{...register('priority', {
									required: true
								})}
							/>
							{errors.priority && (
								<div>Приоритет обязателен для заполнения</div>
							)}
						</ModalTaskParameter>
						<ModalTaskParameter>
							<ModalTaskParameterName>Проект</ModalTaskParameterName>
							<ModalProjectAdd>
								Добавить к проекту
								<svg
									width='16'
									height='16'
									viewBox='0 0 16 16'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M5.33334 8H10.6667'
										stroke='#3EC091'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M8 10.6666V5.33325'
										stroke='#3EC091'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
									<path
										d='M6.00001 14.6666H10C13.3333 14.6666 14.6667 13.3333 14.6667 9.99992V5.99992C14.6667 2.66659 13.3333 1.33325 10 1.33325H6.00001C2.66668 1.33325 1.33334 2.66659 1.33334 5.99992V9.99992C1.33334 13.3333 2.66668 14.6666 6.00001 14.6666Z'
										stroke='#3EC091'
										strokeLinecap='round'
										strokeLinejoin='round'
									/>
								</svg>
							</ModalProjectAdd>
						</ModalTaskParameter>
						<ModalTaskParameter>
							<ModalTaskParameterName>Дедлайн</ModalTaskParameterName>
							<Input
								className={errors.deadline && 'error'}
								type='text'
								{...register('deadline', {
									required: true
								})}
							/>
							{errors.deadline && <div>Дедлайн обязателен для заполнения</div>}
						</ModalTaskParameter>
					</ModalTaskList>
					<ModalTaskDesc>
						<ModalTaskHeading>Описание</ModalTaskHeading>
						<ModalInputDesc
							{...register('desc', {
								required: true
							})}
						/>
						{errors.desc && <div>Описание обязательно для заполнения</div>}
					</ModalTaskDesc>
					{/* {images && (
						<ModalTaskDesc>
							<ModalTaskHeading>Изображения</ModalTaskHeading>
							<ModalTaskImages>
								<ModalTaskImage>
									<img src={images[0]} alt={title} />
								</ModalTaskImage>
							</ModalTaskImages>
						</ModalTaskDesc>
					)} */}
					<ModalTaskDesc>
						<ModalTaskHeading>Заметки</ModalTaskHeading>
						<ModalNotes>
							<ModalNote></ModalNote>
						</ModalNotes>
					</ModalTaskDesc>
				</form>
			</ModalTaskContainer>
		</ModalWindow>
	)
}

export default CreateTask
