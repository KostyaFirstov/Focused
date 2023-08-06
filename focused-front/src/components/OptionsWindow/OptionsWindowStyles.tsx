import { styled } from 'styled-components'
import * as vars from '../../styles/variables'

export const OptionsWrapper = styled.div`
	position: absolute;
	top: calc(100% + 4px);
	right: -10px;
	display: flex;
	flex-direction: column;
	background-color: ${vars.grayLightColor};
	width: 150px;
	border-radius: 6px;
	box-shadow: 0px 10px 20px 0px rgba(77, 76, 83, 0.14);
	padding: 10px;
	z-index: 10;
	max-height: 100px;
	cursor: initial;
`

export const OptionsItems = styled.div`
	overflow-y: auto;
	overflow-x: hidden;

	&::-webkit-scrollbar {
		width: 6px;
	}
	&::-webkit-scrollbar-track {
		background-color: ${vars.primaryBrandColor};
	}
	&::-webkit-scrollbar-thumb {
		box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
	}
`
export const OptionsItem = styled.button`
	width: calc(100% - 8px);
	padding: 10px;
	border-radius: 6px;

	&:hover {
		background-color: ${vars.primaryBrandColor};
	}

	&:last-of-type {
		border-bottom: unset;
	}
`
