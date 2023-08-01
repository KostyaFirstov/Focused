import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { Input } from '../../styles/globalStyle'

export const SearchWrapper = styled.div`
	position: relative;
`

export const SearchInput = styled(Input)`
	min-width: 400px;
	min-height: 44px;
	width: 100%;
	padding-left: 40px;
	padding-right: 36px;
	overflow: hidden;
`

export const SearchButton = styled.button`
	position: absolute;
	top: 50%;
	left: 0;
	padding: 0 10px;
	transform: translateY(-50%);
	height: 100%;

	& path {
		transition: 0.15s;
	}

	&:hover path {
		stroke: ${vars.primaryBrandColor};
	}
`

export const ClearInput = styled(SearchButton)`
	width: 14px;
	height: 14px;
	right: 16px;
	left: unset;

	& line {
		transition: 0.15s;
	}

	&:hover line {
		stroke: ${vars.primaryBrandColor};
	}

	& svg {
		width: 14px;
		height: 14px;
	}
`
