import styled from 'styled-components'
import * as vars from '../../../styles/variables'
import { TaskImage } from '../TaskStyles'

export const ModalTaskWrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	z-index: 1000;
	background-color: rgba(0, 0, 0, 0.65);
	display: flex;
	justify-content: center;
	align-items: center;
`

export const ModalTaskContainer = styled.div`
	background-color: #fff;
	border-radius: 12px;
	padding: 20px;
	max-width: 700px;
	width: 100%;
`

export const ModalProjectAdd = styled.button`
	display: flex;
	align-items: center;
	gap: 4px;
	color: ${vars.primaryBrandColor};
`
export const ModalTaskList = styled.ul`
	padding: 16px 0;
`

export const ModalTaskParameter = styled.li`
	display: flex;
	align-items: center;
	gap: 10px;
	margin-bottom: 12px;

	&:last-of-type {
		margin-bottom: 0;
	}
`
export const ModalTaskParameterName = styled.span`
	font-size: ${vars.fontSizeMedium};
	font-weight: 600;
	max-width: 120px;
	width: 100%;
`
export const ModalTaskHeading = styled(ModalTaskParameterName)`
	display: inline-block;
	margin-bottom: 8px;
	max-width: unset;
`

export const ModalTaskDesc = styled.div`
	padding: 16px 0;
	border-top: 1px solid ${vars.grayLightColor};

	&:last-of-type {
		border-bottom: 1px solid ${vars.grayLightColor};
	}
`
export const ModalTaskImage = styled.div`
	max-width: 100%;

	& img {
		width: 130px;
		height: 130px;
		object-fit: cover;
		border-radius: 30px;
		border: 1px solid ${vars.primaryBrandColor};
	}
`
export const ModalTaskImages = styled.div`
	display: grid;
	grid-template-columns: repeat(5, 1fr);
	grid-gap: 10px;
`

export const ModalNotes = styled.ul``
export const ModalNote = styled.ul``
