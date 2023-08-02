import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { TaskWrapper } from '../Task/TaskStyles'
import { Heading, TextSpan } from '../../styles/globalStyle'

// SectionWrapper
export const SectionHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	border-bottom: 3px solid ${vars.grayColor};
	padding-bottom: 16px;
	margin-bottom: 20px;
`

export const SectionName = styled(Heading)`
	position: relative;
	left: 16px;

	&:before {
		content: '';
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		left: -16px;
		width: 10px;
		height: 10px;
		border-radius: 100%;
		background-color: ${vars.grayColor};
	}
`

export const SectionsWrapper = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	grid-gap: 16px;
`

export const SectionColumn = styled(TaskWrapper)`
	cursor: unset;
	background-color: ${vars.grayLightColor};
	max-width: unset;
	min-height: 100vh;
`

export const SectionTasks = styled(TextSpan)`
	background-color: ${vars.grayColor};
	color: #fff;
	border-radius: 100%;
	width: 20px;
	height: 20px;
	display: flex;
	align-items: center;
	justify-content: center;
`
