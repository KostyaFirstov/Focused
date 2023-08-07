import styled from 'styled-components'
import * as vars from '../../styles/variables'

export const ModalWrapper = styled.div`
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
