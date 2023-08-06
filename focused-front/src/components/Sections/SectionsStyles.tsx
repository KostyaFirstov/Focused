import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { TaskOptionsOpen, TaskWrapper } from '../Task/TaskStyles'
import { Heading, TextSpan } from '../../styles/globalStyle'

// SectionWrapper
export const SectionHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding-bottom: 12px;
	margin-bottom: 20px;
`

export const SectionName = styled(Heading)`
	position: relative;
`

export const SectionsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 16px;
`

export const SectionColumn = styled(TaskWrapper)<{ $color: string }>`
	cursor: unset;
	background-color: ${vars.grayLightColor};
	max-width: unset;
	min-height: 100vh;
	box-shadow: unset;

	${SectionName} {
		color: ${({ $color }) => $color};
	}

	${SectionHeader} {
		border-bottom: 3px solid ${({ $color }) => $color};
	}
`

export const SectionLeft = styled.div`
	display: flex;
	align-items: center;
	gap: 8px;
`
export const SectionRight = styled(SectionLeft)`
	gap: 0px;
`
export const SectionAdd = styled.button`
	height: 24px;

	path {
		transition: 0.15s;
	}

	&:hover path {
		fill: ${vars.primaryBrandColor};
	}
`
export const SectionOptionsOpen = styled(TaskOptionsOpen)`
	&:hover {
		background-color: ${vars.grayMediumColor};
	}
`
export const SectionOptions = styled.div`
	position: relative;
	left: 8px;
`

export const SectionTasks = styled.div`
	display: grid;
	grid-gap: 16px;
`

export const SectionAmount = styled(TextSpan)`
	background-color: ${vars.grayMediumColor};
	color: #fff;
	border-radius: 100%;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`
