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
} from './ModalTaskStyles'
import { TaskPriority } from '../TaskStyles'
import { TaskProps } from '../index'
import { Input, MainHeading, TextParagraph } from '../../../styles/globalStyle'
import { SubmitHandler, useForm } from 'react-hook-form'
import ModalWindow from '../../ModalWindow'

interface ModalTaskProps extends TaskProps {
	modalRef: React.RefObject<HTMLDivElement>
	onSetModal: () => void
}

const ModalTask: React.FC<ModalTaskProps> = ({
	title,
	desc,
	priority,
	images,
	project,
	section,
	modalRef,
	deadline,
	notes,
	onSetModal
}) => {
	const [values, setValues] = React.useState<TaskProps>()
	const [isChangeMode, setIsChangeMode] = React.useState(false)

	const {
		register,
		handleSubmit,
		setError,
		setValue,
		formState: { errors, isValid }
	} = useForm<TaskProps>({
		mode: 'onSubmit'
	})

	React.useEffect(() => {
		const setValues = () => {
			if (isChangeMode) {
				setValue('title', title)
				setValue('desc', desc)
				setValue('priority', priority)
				setValue('project', project)
				setValue('section', section)
				setValue('deadline', deadline)
				setValue('images', images)
				setValue('notes', notes)
			}
		}

		setValues()
	}, [isChangeMode])

	const onSetMode = () => {
		setIsChangeMode(prev => !prev)
	}

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
						<ModalTaskComplete $active={section === 'Done' ? true : false}>
							<svg
								width='24'
								height='24'
								viewBox='0 0 24 24'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M2.25 12C2.25 6.61704 6.61704 2.25 12 2.25C17.383 2.25 21.75 6.61704 21.75 12C21.75 17.383 17.383 21.75 12 21.75C6.61704 21.75 2.25 17.383 2.25 12ZM12 3.75C7.44546 3.75 3.75 7.44546 3.75 12C3.75 16.5545 7.44546 20.25 12 20.25C16.5545 20.25 20.25 16.5545 20.25 12C20.25 7.44546 16.5545 3.75 12 3.75Z'
									fill='#4D4C53'
								/>
								<path
									fillRule='evenodd'
									clipRule='evenodd'
									d='M16.9824 7.67572C17.2996 7.94214 17.3407 8.41523 17.0743 8.73239L10.7743 16.2324C10.6347 16.3986 10.4299 16.4962 10.2128 16.4999C9.99576 16.5036 9.78775 16.4131 9.64253 16.2517L6.94253 13.2517C6.66543 12.9438 6.69039 12.4696 6.99828 12.1925C7.30616 11.9154 7.78038 11.9404 8.05747 12.2483L10.1805 14.6072L15.9257 7.76761C16.1921 7.45044 16.6652 7.4093 16.9824 7.67572Z'
									fill='#4D4C53'
								/>
							</svg>
							{section === 'Done' ? 'Задача выполнена' : 'Выполнить задачу'}
						</ModalTaskComplete>
						<ModalTaskOptions>
							<ModalTaskOption>
								<svg
									width='16'
									height='20'
									viewBox='0 0 16 20'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M13.7598 0H6.22855C5.86216 0 5.65862 0.194932 5.61791 0.233918L0.244257 5.38012C0.203547 5.4191 0 5.61404 0 5.92593V17.8168C0 19.0253 1.01774 20 2.27973 20H13.7191C14.9811 20 15.9988 19.0253 15.9988 17.8168V2.18324C16.0395 0.974659 15.0218 0 13.7598 0ZM5.37365 2.76803V4.52242C5.37365 4.83431 5.12939 5.06823 4.80372 5.06823H2.93108L5.37365 2.76803ZM14.3297 17.8558C14.3297 18.1676 14.0448 18.4016 13.7598 18.4016H2.27973C1.95405 18.4016 1.7098 18.1287 1.7098 17.8558V6.78363H4.80372C6.06571 6.78363 7.08345 5.80897 7.08345 4.60039V1.63743H13.7191C14.0448 1.63743 14.289 1.87135 14.289 2.18324L14.3297 17.8558Z'
										fill='#4D4C53'
									/>
								</svg>
							</ModalTaskOption>
							<ModalTaskOption onClick={onSetMode}>
								{isChangeMode ? (
									<svg
										width='24'
										height='24'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M2.25 12C2.25 6.61704 6.61704 2.25 12 2.25C17.383 2.25 21.75 6.61704 21.75 12C21.75 17.383 17.383 21.75 12 21.75C6.61704 21.75 2.25 17.383 2.25 12ZM12 3.75C7.44546 3.75 3.75 7.44546 3.75 12C3.75 16.5545 7.44546 20.25 12 20.25C16.5545 20.25 20.25 16.5545 20.25 12C20.25 7.44546 16.5545 3.75 12 3.75Z'
											fill='#4D4C53'
										/>
										<path
											fillRule='evenodd'
											clipRule='evenodd'
											d='M16.9824 7.67572C17.2996 7.94214 17.3407 8.41523 17.0743 8.73239L10.7743 16.2324C10.6347 16.3986 10.4299 16.4962 10.2128 16.4999C9.99576 16.5036 9.78775 16.4131 9.64253 16.2517L6.94253 13.2517C6.66543 12.9438 6.69039 12.4696 6.99828 12.1925C7.30616 11.9154 7.78038 11.9404 8.05747 12.2483L10.1805 14.6072L15.9257 7.76761C16.1921 7.45044 16.6652 7.4093 16.9824 7.67572Z'
											fill='#4D4C53'
										/>
									</svg>
								) : (
									<svg
										width='22'
										height='22'
										viewBox='0 0 22 22'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											d='M20.2799 5.48672L10.7399 15.0267C9.7899 15.9767 6.96987 16.4167 6.33987 15.7867C5.70987 15.1567 6.13987 12.3367 7.08987 11.3867L16.6399 1.83669C16.8754 1.57975 17.1605 1.37321 17.4781 1.22951C17.7956 1.08581 18.139 1.00791 18.4875 1.00057C18.8359 0.993241 19.1823 1.05658 19.5056 1.18679C19.8289 1.317 20.1225 1.5114 20.3686 1.7582C20.6147 2.005 20.8083 2.2991 20.9376 2.62276C21.0669 2.94643 21.1294 3.29293 21.1211 3.64138C21.1128 3.98983 21.0339 4.33302 20.8894 4.65017C20.7448 4.96732 20.5375 5.25191 20.2799 5.48672Z'
											stroke='#4D4C53'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
										<path
											d='M10 3.08667H5C3.93913 3.08667 2.92178 3.50809 2.17163 4.25824C1.42149 5.00839 1 6.0258 1 7.08667V17.0867C1 18.1476 1.42149 19.165 2.17163 19.9151C2.92178 20.6653 3.93913 21.0867 5 21.0867H16C18.21 21.0867 19 19.2867 19 17.0867V12.0867'
											stroke='#4D4C53'
											strokeWidth='1.5'
											strokeLinecap='round'
											strokeLinejoin='round'
										/>
									</svg>
								)}
							</ModalTaskOption>
							<ModalTaskOption>
								<svg
									width='27'
									height='17'
									viewBox='0 0 27 17'
									fill='none'
									xmlns='http://www.w3.org/2000/svg'
								>
									<path
										d='M8.47674 1.88889C4.83552 1.88889 1.88372 4.84879 1.88372 8.5C1.88372 12.1512 4.83552 15.1111 8.47674 15.1111H9.73256C10.2527 15.1111 10.6744 15.534 10.6744 16.0556C10.6744 16.5771 10.2527 17 9.73256 17H8.47674C3.79517 17 0 13.1944 0 8.5C0 3.80558 3.79517 0 8.47674 0H9.73256C10.2527 0 10.6744 0.422847 10.6744 0.944444C10.6744 1.46604 10.2527 1.88889 9.73256 1.88889H8.47674Z'
										fill='#4D4C53'
									/>
									<path
										d='M8.79059 8.50011C8.79059 7.97852 9.21227 7.55566 9.73245 7.55566H17.2673C17.7875 7.55566 18.2092 7.97852 18.2092 8.50011C18.2092 9.02182 17.7875 9.44455 17.2673 9.44455H9.73245C9.21227 9.44455 8.79059 9.02182 8.79059 8.50011Z'
										fill='#4D4C53'
									/>
									<path
										d='M17.2674 0C16.7473 0 16.3256 0.422847 16.3256 0.944444C16.3256 1.46604 16.7473 1.88889 17.2674 1.88889H18.5232C22.1645 1.88889 25.1163 4.84879 25.1163 8.5C25.1163 12.1512 22.1645 15.1111 18.5232 15.1111H17.2674C16.7473 15.1111 16.3256 15.534 16.3256 16.0556C16.3256 16.5771 16.7473 17 17.2674 17H18.5232C23.2048 17 27 13.1944 27 8.5C27 3.80558 23.2048 0 18.5232 0H17.2674Z'
										fill='#4D4C53'
									/>
								</svg>
							</ModalTaskOption>
							<ModalTaskOption onClick={onSetModal}>
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
						{!isChangeMode ? (
							<>{title}</>
						) : (
							<Input
								className={errors.title && 'error'}
								type='text'
								placeholder='Полететь на марс!'
								{...register('title', {
									required: true
								})}
							/>
						)}
						{errors.title && (
							<div>Название задачи обязательно для заполнения</div>
						)}
					</MainHeading>
					<ModalTaskList>
						<ModalTaskParameter>
							<ModalTaskParameterName>Раздел</ModalTaskParameterName>{' '}
							{!isChangeMode ? (
								<>{section}</>
							) : (
								<Input
									className={errors.section && 'error'}
									type='text'
									{...register('section', {
										required: true
									})}
								/>
							)}
							{errors.section && <div>Раздел обязателен для заполнения</div>}
						</ModalTaskParameter>
						<ModalTaskParameter>
							<ModalTaskParameterName>Приоритет</ModalTaskParameterName>
							{!isChangeMode ? (
								<TaskPriority $color={priority}>{priority}</TaskPriority>
							) : (
								<Input
									className={errors.priority && 'error'}
									type='text'
									{...register('priority', {
										required: true
									})}
								/>
							)}
							{errors.priority && (
								<div>Приоритет обязателен для заполнения</div>
							)}
						</ModalTaskParameter>
						<ModalTaskParameter>
							<ModalTaskParameterName>Проект</ModalTaskParameterName>
							{project ? (
								project
							) : (
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
							)}
						</ModalTaskParameter>
						<ModalTaskParameter>
							<ModalTaskParameterName>Дедлайн</ModalTaskParameterName>
							{!isChangeMode ? (
								<>{deadline}</>
							) : (
								<Input
									className={errors.deadline && 'error'}
									type='text'
									{...register('deadline', {
										required: true
									})}
								/>
							)}
							{errors.deadline && <div>Дедлайн обязателен для заполнения</div>}
						</ModalTaskParameter>
					</ModalTaskList>
					<ModalTaskDesc>
						<ModalTaskHeading>Описание</ModalTaskHeading>
						{!isChangeMode ? (
							<TextParagraph>{desc}</TextParagraph>
						) : (
							<ModalInputDesc
								{...register('desc', {
									required: true
								})}
							/>
						)}
						{errors.desc && <div>Описание обязательно для заполнения</div>}
					</ModalTaskDesc>
					{images && (
						<ModalTaskDesc>
							<ModalTaskHeading>Изображения</ModalTaskHeading>
							<ModalTaskImages>
								<ModalTaskImage>
									<img src={images[0]} alt={title} />
								</ModalTaskImage>
							</ModalTaskImages>
						</ModalTaskDesc>
					)}
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

export default ModalTask
