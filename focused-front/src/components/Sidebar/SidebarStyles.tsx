import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { Link } from 'react-router-dom'

export const SidebarWrapper = styled.div`
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: column;
	max-width: 250px;
	width: 100%;
	height: 100vh;
	border-right: 1px solid ${vars.grayLightColor};
`
export const SidebarLinks = styled.div`
	padding: 12px;
`

export const SidebarLink = styled(Link)<{ isActive?: boolean }>`
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 6px 8px;
	font-weight: 500;
	transition: 0.15s;
	border-radius: 6px;
	min-height: 39px;
	margin-bottom: 2px;

	color: ${({ isActive }) =>
		isActive ? vars.primaryBrandColor : vars.grayColor};
	background-color: ${({ isActive }) =>
		isActive ? 'rgba(62, 192, 145, 0.16)' : ''};

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

export const SidebarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid ${vars.grayLightColor};
	padding: 10px 0;
`
