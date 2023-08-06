import styled from 'styled-components'
import * as vars from '../../../styles/variables'

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

export const ModalTaskList = styled.ul``

export const ModalTaskParameter = styled.li``

export const ModalTaskParameterName = styled.span``

export const ModalTaskDesc = styled.div`
	padding: 10px 0;
	border-top: 1px solid ${vars.grayLightColor};
	border-bottom: 1px solid ${vars.grayLightColor};
`

export const ModalNotes = styled.ul``
export const ModalNote = styled.ul``
