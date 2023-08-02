import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { Heading, TextSpan } from '../../styles/globalStyle'
import { Link } from 'react-router-dom'

export const AccountWrapper = styled.div`
	position: relative;
	margin-left: 4px;
`
export const AccountTop = styled.button<{ $active: boolean }>`
	display: flex;
	align-items: center;
	padding: 6px 8px 6px 12px;
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	transition: 0.15s;

	background-color: ${({ $active }) =>
		$active ? `${vars.grayLightColor}` : ''};

	&:hover {
		background-color: ${vars.grayLightColor};
	}
`
export const AccountInfo = styled.div`
	margin-right: 8px;
	text-align: right;
`
export const AccountName = styled(Heading)`
	font-size: ${vars.fontSizeMedium};
`
export const AccountPlace = styled(TextSpan)`
	color: ${vars.primaryBrandColor};
	font-weight: 500;
`
export const AccountImage = styled.img`
	width: 48px;
	height: 48px;
	object-fit: cover;
	border-radius: 100%;
`
export const AccountThumbler = styled.div<{ $active: boolean }>`
	margin-left: 4px;
	transition: 0.25s;

	transform: ${({ $active }) => ($active ? 'rotate(180deg)' : 'rotate(0)')};
`
export const AccountDropDown = styled.div`
	position: absolute;
	width: 100%;
	left: 0;
	top: 0;
	transform: translateY(36%);
	background-color: ${vars.grayLightColor};
	border-top: 1px solid ${vars.primaryBrandColor};
	border-bottom-left-radius: 6px;
	border-bottom-right-radius: 6px;
	padding: 10px;
`
export const AccountLinks = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
`
export const AccountLink = styled(Link)`
	text-align: left;
	width: 100%;
	padding: 10px;
	font-weight: 500;
	border-radius: 6px;

	&:hover {
		color: #fff;
		background-color: ${vars.primaryBrandColor};
	}
`
