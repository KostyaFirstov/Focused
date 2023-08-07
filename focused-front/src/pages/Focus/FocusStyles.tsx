import styled from 'styled-components'
import * as vars from '../../styles/variables'
import { Button, MainHeading } from '../../styles/globalStyle'

export const FocusWrapper = styled.div`
	display: grid;
	grid-template-columns: 2fr 1fr;
	grid-gap: 20px;
`
export const FocusImage = styled.img`
	width: 100%;
`
export const FocusCurrentMode = styled.div`
	padding: 60px 45px 0;
`
export const FocusMain = styled.div`
	background-color: ${vars.primaryBrandColor};
	border-radius: 24px;
	padding: 36px;
`
export const FocusContent = styled.div`
	border-radius: 118px;
	background: linear-gradient(180deg, #fbcb18 0%, rgba(255, 255, 255, 0) 100%);
`
export const FocusTitle = styled(MainHeading)`
	color: #fff;
	font-family: 'Inter', sans-serif;
	max-width: 400px;
`
export const FocusTime = styled(FocusTitle)`
	font-weight: 900;
	font-size: ${vars.fontSizeSuper};
`
export const FocusOptions = styled.div`
	display: flex;
	gap: 8px;
	margin-top: 12px;
`
export const FocusStart = styled(Button)``
export const FocusMode = styled(Button)`
	display: flex;
	align-items: center;
	gap: 10px;
`

export const FocusInfo = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
`
export const FocusHistoryList = styled.div`
	max-height: 500px;
	overflow-y: auto;
`
export const FocusHistoryItem = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	padding: 13px 0;
	border-top: 1px solid #fff;

	&:last-of-type {
		border-bottom: 1px solid #fff;
	}
`
export const FocusHeader = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 14px;
`
export const FocusAmount = styled.div`
	color: ${vars.yellowColor};
	font-weight: 900;
	display: flex;
	align-items: center;
	gap: 4px;
`

export const FocusHistoryItemCell = styled.div`
	color: #fff;

	&:last-of-type {
		text-align: right;
	}
`
export const FocusHistory = styled(FocusMain)`
	padding: 20px;
	flex: 3;
`
export const FocusModes = styled(FocusHistory)`
	flex: 1;
`
export const FocusModesList = styled.div`
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-gap: 8px;
	max-height: 170px;
	overflow-y: auto;
`
export const FocusModesItem = styled(Button)`
	text-align: center;
`
export const FocusDescTitle = styled(FocusTitle)`
	font-size: ${vars.fontSizeNormal};
`
