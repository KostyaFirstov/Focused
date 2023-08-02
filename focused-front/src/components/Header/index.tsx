import React from 'react'
import {
	HeaderLeft,
	HeaderOptions,
	HeaderOption,
	HeaderWrapper
} from './HeaderStyles'
import Search from '../Search'
import DropdownAccount from '../DropDownAccount'
import Logo from '../Logo'

// const options = [
// 	{
// 		link: '/calendar',
// 		icon: (
// 			<svg
// 				width='24'
// 				height='24'
// 				viewBox='0 0 24 24'
// 				fill='none'
// 				xmlns='http://www.w3.org/2000/svg'
// 			>
// 				<path
// 					d='M8 2V5'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M16 2V5'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M3.5 9.08997H20.5'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M11.9955 13.7H12.0045'
// 					stroke='#4D4C53'
// 					strokeWidth='2'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M8.29431 13.7H8.30329'
// 					stroke='#4D4C53'
// 					strokeWidth='2'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M8.29431 16.7H8.30329'
// 					stroke='#4D4C53'
// 					strokeWidth='2'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 			</svg>
// 		)
// 	},
// 	{
// 		link: '/ask',
// 		icon: (
// 			<svg
// 				width='24'
// 				height='24'
// 				viewBox='0 0 24 24'
// 				fill='none'
// 				xmlns='http://www.w3.org/2000/svg'
// 			>
// 				<path
// 					d='M8 2V5'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M16 2V5'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M3.5 9.08997H20.5'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M11.9955 13.7H12.0045'
// 					stroke='#4D4C53'
// 					strokeWidth='2'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M8.29431 13.7H8.30329'
// 					stroke='#4D4C53'
// 					strokeWidth='2'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M8.29431 16.7H8.30329'
// 					stroke='#4D4C53'
// 					strokeWidth='2'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 			</svg>
// 		)
// 	},
// 	{
// 		link: '/notification',
// 		icon: (
// 			<svg
// 				width='24'
// 				height='24'
// 				viewBox='0 0 24 24'
// 				fill='none'
// 				xmlns='http://www.w3.org/2000/svg'
// 			>
// 				<path
// 					d='M8 2V5'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M16 2V5'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M3.5 9.08997H20.5'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z'
// 					stroke='#4D4C53'
// 					strokeWidth='1.5'
// 					strokeMiterlimit='10'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M11.9955 13.7H12.0045'
// 					stroke='#4D4C53'
// 					strokeWidth='2'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M8.29431 13.7H8.30329'
// 					stroke='#4D4C53'
// 					strokeWidth='2'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 				<path
// 					d='M8.29431 16.7H8.30329'
// 					stroke='#4D4C53'
// 					strokeWidth='2'
// 					strokeLinecap='round'
// 					strokeLinejoin='round'
// 				/>
// 			</svg>
// 		)
// 	}
// ]

const Header = () => {
	return (
		<HeaderWrapper>
			<HeaderLeft>
				<Logo />
				<Search />
			</HeaderLeft>
			<HeaderOptions>
				<HeaderOption to={'/'}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M8 2V5'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M16 2V5'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M3.5 9.08997H20.5'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M21 8.5V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M11.9955 13.7H12.0045'
							stroke='#4D4C53'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8.29431 13.7H8.30329'
							stroke='#4D4C53'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M8.29431 16.7H8.30329'
							stroke='#4D4C53'
							strokeWidth='2'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</HeaderOption>
				<HeaderOption to={'/'}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M17 18.43H13L8.54999 21.39C7.88999 21.83 7 21.36 7 20.56V18.43C4 18.43 2 16.43 2 13.43V7.42993C2 4.42993 4 2.42993 7 2.42993H17C20 2.42993 22 4.42993 22 7.42993V13.43C22 16.43 20 18.43 17 18.43Z'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M12.0001 11.36V11.15C12.0001 10.47 12.4201 10.11 12.8401 9.82001C13.2501 9.54001 13.66 9.18002 13.66 8.52002C13.66 7.60002 12.9201 6.85999 12.0001 6.85999C11.0801 6.85999 10.3401 7.60002 10.3401 8.52002'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M11.9955 13.75H12.0045'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
					</svg>
				</HeaderOption>
				<HeaderOption $after={true} to={'/'}>
					<svg
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M12.02 2.91003C8.71003 2.91003 6.02003 5.60003 6.02003 8.91003V11.8C6.02003 12.41 5.76003 13.34 5.45003 13.86L4.30003 15.77C3.59003 16.95 4.08003 18.26 5.38003 18.7C9.69003 20.14 14.34 20.14 18.65 18.7C19.86 18.3 20.39 16.87 19.73 15.77L18.58 13.86C18.28 13.34 18.02 12.41 18.02 11.8V8.91003C18.02 5.61003 15.32 2.91003 12.02 2.91003Z'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeMiterlimit='10'
							strokeLinecap='round'
						/>
						<path
							d='M13.87 3.19994C13.56 3.10994 13.24 3.03994 12.91 2.99994C11.95 2.87994 11.03 2.94994 10.17 3.19994C10.46 2.45994 11.18 1.93994 12.02 1.93994C12.86 1.93994 13.58 2.45994 13.87 3.19994Z'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeMiterlimit='10'
							strokeLinecap='round'
							strokeLinejoin='round'
						/>
						<path
							d='M15.02 19.0601C15.02 20.7101 13.67 22.0601 12.02 22.0601C11.2 22.0601 10.44 21.7201 9.90002 21.1801C9.36002 20.6401 9.02002 19.8801 9.02002 19.0601'
							stroke='#4D4C53'
							strokeWidth='1.5'
							strokeMiterlimit='10'
						/>
					</svg>
				</HeaderOption>
				<DropdownAccount />
			</HeaderOptions>
		</HeaderWrapper>
	)
}

export default Header
