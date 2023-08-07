import React from 'react'
import {
	ModalNote,
	ModalNotes,
	ModalTaskContainer,
	ModalTaskDesc,
	ModalTaskList,
	ModalTaskParameter,
	ModalTaskParameterName,
	ModalTaskWrapper,
	ModalProjectAdd,
	ModalTaskHeading,
	ModalTaskImages,
	ModalTaskImage
} from './ModalTaskStyles'
import { TaskImage, TaskPriority } from '../TaskStyles'
import { TaskProps } from '../index'
import { MainHeading, TextParagraph } from '../../../styles/globalStyle'

interface ModalTaskProps extends TaskProps {
	modalRef: React.RefObject<HTMLDivElement>
}

const ModalTask: React.FC<ModalTaskProps> = ({
	title,
	desc,
	priority,
	image,
	project,
	section,
	modalRef
}) => {
	return (
		<ModalTaskWrapper>
			<ModalTaskContainer ref={modalRef}>
				<MainHeading>{title}</MainHeading>
				<ModalTaskList>
					<ModalTaskParameter>
						<ModalTaskParameterName>Раздел</ModalTaskParameterName> {section}
					</ModalTaskParameter>
					<ModalTaskParameter>
						<ModalTaskParameterName>Приоритет</ModalTaskParameterName>
						<TaskPriority $color={priority}>{priority}</TaskPriority>
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
						08 August 17:00
					</ModalTaskParameter>
				</ModalTaskList>
				<ModalTaskDesc>
					<ModalTaskHeading>Описание</ModalTaskHeading>
					<TextParagraph>{desc}</TextParagraph>
				</ModalTaskDesc>
				{image && (
					<ModalTaskDesc>
						<ModalTaskHeading>Изображения</ModalTaskHeading>
						<ModalTaskImages>
							<ModalTaskImage>
								<img src={image} alt={title} />
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
			</ModalTaskContainer>
		</ModalTaskWrapper>
	)
}

export default ModalTask
