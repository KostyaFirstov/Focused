import React from 'react'
import { Heading, TextParagraph } from '../../styles/globalStyle'
import {
	TaskWrapper,
	TaskHeader,
	TaskOptions,
	TaskComments,
	TaskFooter,
	TaskMain,
	TaskPriority,
	TaskImage,
	TaskDeadline,
	TaskOptionsOpen
} from './TaskStyles'
import OptionsWindow from '../OptionsWindow'
import { OptionsItem } from '../OptionsWindow/OptionsWindowStyles'
import ModalTask from './ModalTask'
import useOutsideClick from '../../hooks/useOutsideClick'

export interface TaskProps {
	title: string
	desc: string
	priority: string
	images?: string[]
	project?: any
	section: string
	deadline: string
	notes?: string[]
}

const Task: React.FC<TaskProps> = props => {
	const [options, setOptions] = React.useState(false)
	const [modal, setModal] = React.useState(false)
	const optionsRef = React.useRef(null)
	const openModalRef = React.useRef(null)
	const modalRef = React.useRef(null)

	const { desc, priority, title, images, deadline } = props

	useOutsideClick([optionsRef], () => {
		setOptions(false)
	})

	useOutsideClick([openModalRef, modalRef], () => {
		setModal(false)
	})

	const tasksOptions = [
		{ text: 'Переместить', func: '' },
		{ text: 'Изменить', func: '' },
		{ text: 'Удалить', func: '' }
	]

	const onSetModal = () => {
		setModal(prev => !prev)
	}

	const onOpenOptions = () => {
		setOptions(prev => !prev)
	}

	return (
		<>
			<TaskWrapper ref={modalRef}>
				<TaskHeader>
					<TaskPriority $color={priority}>{priority}</TaskPriority>
					<TaskOptions ref={optionsRef}>
						<TaskOptionsOpen onClick={onOpenOptions}>
							<svg
								width='15'
								height='5'
								viewBox='0 0 15 5'
								fill='none'
								xmlns='http://www.w3.org/2000/svg'
							>
								<path
									d='M13.1747 4.34883H12.7763C12.7439 4.33992 12.7149 4.32539 12.6825 4.3193C11.8444 4.19039 11.1825 3.49336 11.1267 2.67586C11.0625 1.7618 11.5838 0.988359 12.4331 0.736641C12.5447 0.704297 12.6619 0.680859 12.7758 0.651797H13.1742C13.2005 0.660703 13.2239 0.675234 13.2534 0.678047C14.0269 0.804141 14.6156 1.36055 14.7825 2.12227C14.7942 2.18086 14.812 2.23945 14.8266 2.29805V2.69648C14.8177 2.72273 14.8031 2.74945 14.8003 2.7757C14.6775 3.53742 14.1352 4.11773 13.3824 4.29352C13.3092 4.31133 13.2417 4.33148 13.1742 4.3493L13.1747 4.34883ZM1.91298 0.651328H2.31142C2.34376 0.660234 2.37282 0.674766 2.40517 0.677578C3.24892 0.809297 3.90798 1.50961 3.96095 2.33555C4.01954 3.2468 3.4922 4.01742 2.63954 4.26633C2.53126 4.29867 2.4197 4.32211 2.31142 4.34836H1.91298C1.88673 4.33945 1.86329 4.32492 1.83704 4.31883C1.07532 4.1782 0.577041 3.7357 0.339854 2.99742C0.30751 2.90086 0.290166 2.7982 0.263916 2.69883V2.30039C0.272822 2.27414 0.287354 2.24742 0.290166 2.22117C0.41626 1.45664 0.955322 0.879141 1.70813 0.703359C1.77845 0.686016 1.84595 0.668203 1.91298 0.650391V0.651328ZM7.34485 0.651328H7.74329C7.77563 0.660234 7.8047 0.674766 7.83704 0.68086C8.67798 0.812578 9.35485 1.53914 9.39001 2.35945C9.43079 3.28242 8.87438 4.0643 8.0161 4.28414C7.92517 4.30758 7.8347 4.3282 7.74376 4.34836H7.34532C7.31298 4.33945 7.28392 4.32492 7.25157 4.31883C6.41063 4.18992 5.73376 3.46055 5.69579 2.64023C5.65173 1.71727 6.21142 0.935391 7.0697 0.715547C7.16345 0.692109 7.25438 0.671484 7.34532 0.651328H7.34485Z'
									fill='#4D4C53'
								/>
							</svg>
						</TaskOptionsOpen>
						<OptionsWindow isOpen={options} openWindow={onOpenOptions}>
							{tasksOptions.map((item, index) => (
								<OptionsItem key={index}>{item.text}</OptionsItem>
							))}
						</OptionsWindow>
					</TaskOptions>
				</TaskHeader>
				<TaskMain ref={openModalRef} onClick={onSetModal}>
					<Heading $mb='4px'>{title}</Heading>
					<TextParagraph>{desc}</TextParagraph>
					{images && <TaskImage src={images[0]} alt={title} />}
				</TaskMain>
				<TaskFooter>
					<TaskDeadline>
						<svg
							width='14'
							height='14'
							viewBox='0 0 14 14'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M7.01841 3.51245C6.86335 3.51245 6.71464 3.57413 6.60499 3.68391C6.49535 3.7937 6.43375 3.9426 6.43375 4.09786V7.0249C6.43378 7.18015 6.4954 7.32903 6.60505 7.43879L8.35903 9.19502C8.46929 9.30165 8.61698 9.36066 8.77028 9.35932C8.92357 9.35799 9.07021 9.29642 9.17861 9.18788C9.28701 9.07934 9.3485 8.93252 9.34983 8.77902C9.35116 8.62553 9.29223 8.47766 9.18573 8.36725L7.60306 6.78255V4.09786C7.60306 3.9426 7.54147 3.7937 7.43182 3.68391C7.32218 3.57413 7.17347 3.51245 7.01841 3.51245ZM13.9244 5.93136C13.7237 4.65859 13.1772 3.4656 12.3448 2.48293C11.5124 1.50026 10.4261 0.765759 9.20476 0.359792C7.98341 -0.046175 6.67408 -0.107968 5.42001 0.181173C4.16594 0.470315 3.01545 1.09925 2.09442 1.99917V0.585409C2.09442 0.430149 2.03282 0.281248 1.92318 0.171462C1.81353 0.0616768 1.66482 0 1.50976 0C1.3547 0 1.20599 0.0616768 1.09635 0.171462C0.986704 0.281248 0.925106 0.430149 0.925106 0.585409V2.92704C0.925106 3.23756 1.0483 3.53537 1.26759 3.75494C1.48688 3.97451 1.7843 4.09786 2.09442 4.09786H4.43305C4.58811 4.09786 4.73682 4.03618 4.84647 3.9264C4.95611 3.81661 5.01771 3.66771 5.01771 3.51245C5.01771 3.35719 4.95611 3.20829 4.84647 3.09851C4.73682 2.98872 4.58811 2.92704 4.43305 2.92704H2.82466C3.75894 1.97729 4.98925 1.37565 6.31174 1.2218C7.63423 1.06795 8.96953 1.37112 10.0964 2.08109C11.2233 2.79106 12.0741 3.8652 12.5078 5.12556C12.9416 6.38593 12.9323 7.75685 12.4815 9.0112C12.0307 10.2656 11.1654 11.328 10.029 12.0226C8.89265 12.7172 7.55336 13.0022 6.23308 12.8304C4.91279 12.6586 3.69075 12.0403 2.76943 11.078C1.8481 10.1156 1.28279 8.86696 1.16715 7.53889C1.15199 7.3962 1.08408 7.26434 0.97676 7.16923C0.86944 7.07412 0.730474 7.02264 0.587174 7.0249C0.505407 7.02512 0.424582 7.0424 0.349849 7.07562C0.275116 7.10884 0.208113 7.15728 0.15311 7.21786C0.0981077 7.27844 0.0563108 7.34983 0.0303829 7.42748C0.00445499 7.50513 -0.0050354 7.58733 0.0025164 7.66885C0.0949715 8.60166 0.372942 9.50651 0.820051 10.3301C1.26716 11.1537 1.87437 11.8793 2.60589 12.4643C3.33742 13.0493 4.17847 13.4817 5.0795 13.7362C5.98053 13.9907 6.92332 14.062 7.85231 13.946C8.7813 13.83 9.67771 13.529 10.4887 13.0608C11.2997 12.5925 12.009 11.9665 12.5746 11.2195C13.1403 10.4726 13.5509 9.61984 13.7823 8.71154C14.0137 7.80324 14.0612 6.85775 13.922 5.93078L13.9244 5.93136Z'
								fill='#4D4C53'
							/>
						</svg>
						{deadline}
					</TaskDeadline>
					<TaskComments>
						<svg
							width='16'
							height='16'
							viewBox='0 0 16 16'
							fill='none'
							xmlns='http://www.w3.org/2000/svg'
						>
							<path
								d='M8.00004 15.2066C7.54004 15.2066 7.10671 14.9733 6.80004 14.5666L5.80004 13.2333C5.78004 13.2066 5.70004 13.1733 5.66671 13.1666H5.33337C2.55337 13.1666 0.833374 12.4133 0.833374 8.66659V5.33325C0.833374 2.38659 2.38671 0.833252 5.33337 0.833252H10.6667C13.6134 0.833252 15.1667 2.38659 15.1667 5.33325V8.66659C15.1667 11.6133 13.6134 13.1666 10.6667 13.1666H10.3334C10.28 13.1666 10.2334 13.1933 10.2 13.2333L9.20004 14.5666C8.89337 14.9733 8.46004 15.2066 8.00004 15.2066ZM5.33337 1.83325C2.94671 1.83325 1.83337 2.94659 1.83337 5.33325V8.66659C1.83337 11.6799 2.86671 12.1666 5.33337 12.1666H5.66671C6.00671 12.1666 6.39337 12.3599 6.60004 12.6333L7.60004 13.9666C7.83337 14.2733 8.16671 14.2733 8.40004 13.9666L9.40004 12.6333C9.62004 12.3399 9.96671 12.1666 10.3334 12.1666H10.6667C13.0534 12.1666 14.1667 11.0533 14.1667 8.66659V5.33325C14.1667 2.94659 13.0534 1.83325 10.6667 1.83325H5.33337Z'
								fill='#4D4C53'
							/>
							<path
								d='M8.00004 8.00008C7.62671 8.00008 7.33337 7.70008 7.33337 7.33341C7.33337 6.96675 7.63337 6.66675 8.00004 6.66675C8.36671 6.66675 8.66671 6.96675 8.66671 7.33341C8.66671 7.70008 8.37337 8.00008 8.00004 8.00008Z'
								fill='#4D4C53'
							/>
							<path
								d='M10.6667 8.00008C10.2933 8.00008 10 7.70008 10 7.33341C10 6.96675 10.3 6.66675 10.6667 6.66675C11.0333 6.66675 11.3333 6.96675 11.3333 7.33341C11.3333 7.70008 11.04 8.00008 10.6667 8.00008Z'
								fill='#4D4C53'
							/>
							<path
								d='M5.33329 8.00008C4.95996 8.00008 4.66663 7.70008 4.66663 7.33341C4.66663 6.96675 4.96663 6.66675 5.33329 6.66675C5.69996 6.66675 5.99996 6.96675 5.99996 7.33341C5.99996 7.70008 5.70663 8.00008 5.33329 8.00008Z'
								fill='#4D4C53'
							/>
						</svg>
						12 заметок
					</TaskComments>
				</TaskFooter>
			</TaskWrapper>
			{modal && (
				<ModalTask modalRef={modalRef} {...props} onSetModal={onSetModal} />
			)}
		</>
	)
}

export default Task
