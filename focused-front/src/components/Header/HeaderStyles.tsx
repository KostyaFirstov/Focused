import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { Container } from '../../styles/globalStyle'
import { Link } from 'react-router-dom'

export const HeaderWrapper = styled(Container)`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-bottom: 1px solid ${vars.grayLightColor};
	height: 88px;
`

export const HeaderOptions = styled.div`
	display: flex;
	align-items: center;
	gap: 6px;
`

export const HeaderOption = styled(Link)<{ $after?: boolean }>`
	position: relative;
	padding: 10px;
	border-radius: 100%;
	width: 46px;
	height: 46px;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: 0.15s;

	&:after {
		content: '';
		position: absolute;
		top: 12px;
		right: 12px;
		background-color: ${vars.primaryBrandColor};
		width: 8px;
		height: 8px;
		border-radius: 100%;
		opacity: ${({ $after }) => ($after ? '1' : '0')};
	}

	&:hover {
		background-color: ${vars.grayLightColor};
	}
`
