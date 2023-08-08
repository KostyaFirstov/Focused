import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { Input } from '../../styles/globalStyle'

export const JoinUsWrapper = styled.div`
	height: 100vh;
	background-color: ${vars.primaryBrandColor};
`
export const JoinUsContent = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 1100px;
	margin: 0 auto;
	padding: 44px;
	border-radius: 36px;
	background: rgba(255, 255, 255, 0.4);
	backdrop-filter: blur(5px);
`
export const JoinUsImage = styled.img`
	max-width: 500px;
`
export const JoinUsForm = styled.form`
	max-width: 500px;
	width: 100%;
	margin-right: 30px;
`
export const JoinUsItems = styled.div`
	margin: 80px 0 10px;
`

export const JoinUsBtn = styled.button`
	min-width: 400px;
	height: 50px;
	color: #fff;
	background-color: ${vars.grayColor};
	border-radius: 6px;
	text-align: center;
	transition: 0.15s;

	&:hover {
		background-color: ${vars.primaryBrandColor};
	}
`
export const JoinUsItem = styled.div`
	max-width: 400px;
	width: 100%;
	margin-bottom: 8px;

	&:last-of-type {
		margin-bottom: 0;
	}

	& ${Input} {
		min-width: 340px;
		height: 50px;
		width: 100%;
	}
`

export const JoinUsAdd = styled.div`
	max-width: 400px;
	text-align: center;
	margin: 10px 0;

	& a {
		font-weight: 600;
	}
`
