import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { Link } from 'react-router-dom'

export const SidebarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 250px;
	width: 100%;
	min-height: 100vh;
	border-right: 1px solid ${vars.grayLightColor};
`
export const SidebarLinks = styled.div`
	padding: 12px;
`

export const SidebarLink = styled(Link)<{ isActive?: boolean }>`
	display: flex;
	align-items: center;
	gap: 14px;
	color: ${({ isActive }) =>
		isActive ? vars.primaryBrandColor : vars.grayColor};
	padding: 8px;
	transition: 0.15s;
	border-radius: 6px;
	background-color: ${({ isActive }) =>
		isActive ? 'rgba(62, 192, 145, 0.16)' : ''};
	margin-bottom: 8px;

	&:last-of-type {
		margin-bottom: 0;
	}

	& svg path {
		transition: 0.15s;
	}

	& path {
		stroke: ${({ isActive }) => (isActive ? vars.primaryBrandColor : '')};
	}

	& span {
		width: 24px;
		height: 24px;
	}

	&:hover {
		background-color: rgba(62, 192, 145, 0.16);
	}
`

export const SidebarProject = styled(SidebarLink)<{ color?: string }>`
	& span {
		width: 10px;
		height: 10px;
		border-radius: 100%;
		background-color: ${({ color }) => (color ? color : '')};
	}
`
