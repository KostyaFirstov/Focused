import { styled } from 'styled-components'

export const SubscriptionWrapper = styled.div`
	padding: 12px;
`

export const SubscriptionContent = styled.div`
	position: relative;
	background-color: #f5f5f5;
	border-radius: 16px;
	padding: 40px 20px 20px;
	text-align: center;
`

export const SubscriptionLight = styled.div`
	position: absolute;
	transform: translate(-50%, -110%);
	left: 50%;
	background-color: #f5f5f5;
	border-radius: 100%;
	width: 54px;
	height: 54px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	& svg {
		width: 32px;
		height: 32px;
		position: relative;
		z-index: 5;
	}

	&:after {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		filter: blur(17px);
		z-index: -1;
		box-shadow: 0 0 20px 15px #fbcb18;
	}
`

export const SubscriptionButton = styled.button`
	background-color: #fff;
	border-radius: 6px;
	padding: 12px 27px;
	cursor: pointer;
	width: 100%;
	margin-top: 12px;
	border: unset;
	font-weight: 500;
`
