import styled, { createGlobalStyle } from 'styled-components'
import * as vars from './variables'

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Inter', sans-serif;
	color: ${vars.grayColor};
	font-size: ${vars.fontSizeSmall};
  }

  a {
	text-decoration: none;
  }

  button {
	background-color: unset;
	cursor: pointer;
	text-align: unset;
  }

  button, input {
	  outline: none;
	  border: none;
  }

  ul {
	list-style: none;
  }


`

// TEXT
export const MainHeading = styled.h1`
	font-size: ${vars.fontSizeBig};
	font-family: 'Montserrat', sans-serif;
	font-weight: 600;
`
export const Heading = styled.h2<{ $mb?: string }>`
	font-size: ${vars.fontSizeNormal};
	font-family: 'Montserrat', sans-serif;
	font-weight: 500;
	margin-bottom: ${({ $mb }) => ($mb ? $mb : '')};
`
export const TextSpan = styled.span<{
	$color?: string
	$padding?: string
	$bg?: string
	$br?: string
}>`
	color: ${({ $color }) => ($color ? $color : '')};
	font-size: ${vars.fontSizeSmallest};
	padding: ${({ $padding }) => ($padding ? $padding : '')};
	background-color: ${({ $bg }) => ($bg ? $bg : '')};
	border-radius: ${({ $br }) => ($br ? $br : '')};
`
export const TextParagraph = styled.p`
	font-size: ${vars.fontSizeSmall};
	color: ${vars.grayColor};
`

// CONTROLS
export const Button = styled.button``
export const SmallButton = styled.button<{ $bg?: string }>``

export const LinkStyle = styled.a``

// LAYOT
export const Container = styled.div`
	padding: 22px 50px;
`
export const ContainerFlex = styled.div`
	display: flex;
`
export const ContentWrapper = styled.div`
	width: 100%;
`

// INPUTS

export const Input = styled.input`
	background-color: ${vars.grayLightColor};
	border-radius: 6px;
	padding: 10px 10px 12px;
	border: 1px solid ${vars.grayLightColor};
	transition: 0.15s;
	overflow: hidden;

	&:focus {
		border: 1px solid ${vars.primaryBrandColor};
	}
`

export default GlobalStyle
