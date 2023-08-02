import styled from 'styled-components'
import * as vars from '../../styles/variables'

export const TaskWrapper = styled.div`
	padding: 20px;
	border-radius: 16px;
	cursor: grab;
	background-color: #fff;
`
export const TaskHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const TaskMain = styled.div`
	margin: 8px 0 12px;
`
export const TaskFooter = styled(TaskHeader)``

export const TaskOptions = styled.button`
	width: 32px;
	height: 32px;
	display: flex;
	align-items: center;
	justify-content: center;
	border-radius: 100%;
	transition: 0.15s;

	& path {
		transition: 0.15s;
	}

	&:hover path {
		fill: ${vars.primaryBrandColor};
	}

	&:hover {
		background-color: ${vars.grayLightColor};
	}
`
export const TaskComments = styled(TaskHeader)`
	gap: 4px;
`

export const TaskMembers = styled.ul`
	display: flex;
	align-items: center;
`
export const TaskMember = styled.li`
	& img {
		width: 24px;
		height: 24px;
		border: 1px solid #fff;
		object-fit: cover;
	}
`

export const TaskPriority = styled.span`
	font-size: ${vars.fontSizeSmallest};
	color: ${vars.orangeColor};
	background-color: ${vars.orangeLightColor};
	border-radius: 6px 6px 0px 6px;
	padding: 6px;
	font-weight: 600;
`
