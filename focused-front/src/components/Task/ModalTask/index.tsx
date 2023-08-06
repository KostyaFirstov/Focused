import React from 'react'
import {
	ModalNote,
	ModalNotes,
	ModalTaskContainer,
	ModalTaskDesc,
	ModalTaskList,
	ModalTaskParameter,
	ModalTaskParameterName,
	ModalTaskWrapper
} from './ModalTaskStyles'
import { TaskImage, TaskPriority } from '../TaskStyles'
import { TaskProps } from '../index'
import {
	Button,
	Heading,
	MainHeading,
	TextParagraph
} from '../../../styles/globalStyle'

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
						<ModalTaskParameterName>Раздел </ModalTaskParameterName> {section}
					</ModalTaskParameter>
					<ModalTaskParameter>
						<ModalTaskParameterName>Приоритет </ModalTaskParameterName>
						<TaskPriority $color={priority}>{priority}</TaskPriority>
					</ModalTaskParameter>
					<ModalTaskParameter>
						<ModalTaskParameterName>Проект </ModalTaskParameterName>
						{project ? project : <Button>Добавить к проекту</Button>}
					</ModalTaskParameter>
					<ModalTaskParameter>
						<ModalTaskParameterName>Срок завершения </ModalTaskParameterName>
						08 August 17:00
					</ModalTaskParameter>
				</ModalTaskList>
				<ModalTaskDesc>
					<Heading $mb='4px'>Описание</Heading>
					<TextParagraph>{desc}</TextParagraph>
				</ModalTaskDesc>
				<ModalNotes>
					<ModalNote></ModalNote>
				</ModalNotes>
				{image && <TaskImage src={image} alt={title} />}
			</ModalTaskContainer>
		</ModalTaskWrapper>
	)
}

export default ModalTask
