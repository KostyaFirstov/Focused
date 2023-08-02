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
	position: sticky;
	top: 0;
	background-color: #fff;
	padding: 0 50px 0 0;
	z-index: 100;
`

export const HeaderOptions = styled.div`
	display: flex;
	align-items: center;
	gap: 4px;
`

export const HeaderLeft = styled(HeaderOptions)`
	gap: 50px;
`

export const HeaderOption = styled(Link)<{ $after?: boolean }>`
	position: relative;
	padding: 10px;
	border-radius: 100%;
	width: 44px;
	height: 44px;
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
