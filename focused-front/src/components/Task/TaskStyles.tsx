import styled from 'styled-components'
import * as vars from '../../styles/variables'

export const TaskWrapper = styled.div`
	position: relative;
	padding: 20px;
	border-radius: 16px;
	cursor: grab;
	background-color: #fff;
	box-shadow: 0px 3px 14px 4px rgba(77, 76, 83, 0.05);
	user-select: none;
`
export const TaskImage = styled.img`
	margin-top: 10px;
`

export const TaskHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
`
export const TaskMain = styled.button`
	margin: 6px 0 16px;
`
export const TaskFooter = styled(TaskHeader)``

export const TaskOptions = styled.div`
	position: relative;
	left: 8px;
`

export const TaskOptionsOpen = styled.button`
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

export const TaskComments = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 4px;
`
export const TaskDeadline = styled(TaskComments)``

export const TaskPriority = styled.span<{ $color: string }>`
	font-size: ${vars.fontSizeSmallest};
	border-radius: 6px 6px 0px 6px;
	padding: 6px;
	font-weight: 600;

	color: ${({ $color }) =>
		$color.toLowerCase() === 'high'
			? vars.redColor
			: $color.toLowerCase() === 'low'
			? vars.orangeColor
			: vars.primaryBrandColor};
	background-color: ${({ $color }) =>
		$color.toLowerCase() === 'high'
			? vars.redLightColor
			: $color.toLowerCase() === 'low'
			? vars.orangeLightColor
			: vars.greenLightColor};
`
