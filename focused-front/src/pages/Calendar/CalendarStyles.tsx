import styled from 'styled-components'
import * as vars from '../../styles/variables'

// .fc .fc-button-primary

export const CalendarWrapper = styled.div`
	.fc .fc-toolbar-title {
		color: ${vars.primaryBrandColor};
	}

	.fc-h-event,
	.fc .fc-button-primary {
		border: unset;
		background-color: ${vars.primaryBrandColor};
		box-shadow: unset !important;
	}

	.fc .fc-button-primary:focus,
	.fc-button-active {
		background-color: ${vars.yellowColor} !important;
	}
`
