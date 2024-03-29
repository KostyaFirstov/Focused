import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { Link } from 'react-router-dom'

export const SidebarWrapper = styled.div<{ $isReduced: boolean }>`
	position: sticky;
	top: 0;
	display: flex;
	flex-direction: column;
	max-width: ${({ $isReduced }) => ($isReduced ? '66px' : '250px')};
	width: 100%;
	height: 100vh;
	border-right: 1px solid ${vars.grayLightColor};
`
export const SidebarLinks = styled.div`
	padding: 0 12px 12px;
`

export const SidebarLink = styled(Link)<{ $isActive?: boolean }>`
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 6px 8px;
	font-weight: 500;
	transition: 0.15s;
	border-radius: 6px;
	min-height: 39px;
	margin-bottom: 2px;

	color: ${({ $isActive }) =>
		$isActive ? vars.primaryBrandColor : vars.grayColor};
	background-color: ${({ $isActive }) =>
		$isActive ? 'rgba(62, 192, 145, 0.16)' : ''};

	&:last-of-type {
		margin-bottom: 0;
	}

	& svg path {
		transition: 0.15s;
	}

	& path {
		stroke: ${({ $isActive }) => ($isActive ? vars.primaryBrandColor : '')};
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
export const SidebarReduced = styled.div`
	padding: 12px 12px 0;
	margin-bottom: 3px;
`
export const SidebarReducedBtn = styled.button<{ $isReduced: boolean }>`
	display: flex;
	justify-content: ${({ $isReduced }) =>
		$isReduced ? 'center' : 'space-between'};
	align-items: center;
	gap: 6px;
	width: 100%;
	min-height: 39px;
	transition: 0.15s;
	border-radius: 6px;
	padding: 6px 8px;

	& svg {
		transform: ${({ $isReduced }) =>
			$isReduced ? 'rotate(180deg)' : 'rotate(0)'};
	}

	& path {
		fill: ${({ $isReduced }) => ($isReduced ? vars.primaryBrandColor : '')};
	}

	&:hover {
		background-color: ${vars.greenLightColor};
	}
`

export const SidebarHeader = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	border-top: 1px solid ${vars.grayLightColor};
	padding: 10px 0;
`
