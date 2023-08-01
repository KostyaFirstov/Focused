import { styled } from 'styled-components'

export const SubscriptionWrapper = styled.div`
	padding: 12px;
	position: absolute;
	bottom: 0;
`

export const SubscriptionContent = styled.div`
	position: relative;
	background-color: #f5f5f5;
	border-radius: 16px;
	padding: 30px 12px 12px;
	text-align: center;
`

export const SubscriptionLight = styled.div`
	position: absolute;
	transform: translate(-50%, -110%);
	left: 50%;
	background-color: #f5f5f5;
	border-radius: 100%;
	width: 46px;
	height: 46px;
	display: flex;
	align-items: center;
	justify-content: center;
	overflow: hidden;

	& svg {
		width: 26px;
		height: 26px;
		position: relative;
		z-index: 5;
	}

	&:after {
		content: '';
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		width: 10px;
		height: 10px;
		z-index: -1;
		opacity: 0.5;
		box-shadow: 0 0 20px 16px #fbcb18;
	}
`

export const SubscriptionButton = styled.button`
	background-color: #fff;
	border-radius: 6px;
	padding: 12px 27px;
	width: 100%;
	margin-top: 8px;
	font-weight: 500;
`
