import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { Button } from '../../styles/globalStyle'

export const TasksHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	gap: 10px;
	margin-bottom: 34px;
`
export const TasksOptions = styled.div`
	display: flex;
	align-items: center;
	gap: 10px;
`

export const TasksAdd = styled(Button)`
	display: flex;
	align-items: center;
	gap: 6px;
	transition: 0.15s;

	& path {
		transition: 0.15s;
	}

	&:hover path {
		fill: #fff;
	}

	&:hover {
		color: #fff;
		border: 2px solid ${vars.primaryBrandColor};
		background-color: ${vars.primaryBrandColor};
	}
`
