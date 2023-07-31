import React from 'react'
import {
	SidebarLink,
	SidebarLinks,
	SidebarProject,
	SidebarWrapper
} from './SidebarStyles'
import Logo from '../Logo'
import { useLocation } from 'react-router-dom'
import Subscription from '../Subscription'

const links = [
	{
		name: 'Главная',
		link: '/',
		icon: (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M7 10.25H5C3.87908 10.25 3.08544 9.94333 2.57105 9.42895C2.05667 8.91456 1.75 8.12092 1.75 7V5C1.75 3.87908 2.05667 3.08544 2.57105 2.57105C3.08544 2.05667 3.87908 1.75 5 1.75H7C8.12092 1.75 8.91456 2.05667 9.42895 2.57105C9.94333 3.08544 10.25 3.87908 10.25 5V7C10.25 8.12092 9.94333 8.91456 9.42895 9.42895C8.91456 9.94333 8.12092 10.25 7 10.25ZM5 2.25C4.15353 2.25 3.43049 2.4274 2.92895 2.92895C2.4274 3.43049 2.25 4.15353 2.25 5V7C2.25 7.84647 2.4274 8.56951 2.92895 9.07105C3.43049 9.5726 4.15353 9.75 5 9.75H7C7.84647 9.75 8.56951 9.5726 9.07105 9.07105C9.5726 8.56951 9.75 7.84647 9.75 7V5C9.75 4.15353 9.5726 3.43049 9.07105 2.92895C8.56951 2.4274 7.84647 2.25 7 2.25H5Z'
					stroke='#4D4C53'
				/>
				<path
					d='M19 10.25H17C15.8791 10.25 15.0854 9.94333 14.5711 9.42895C14.0567 8.91456 13.75 8.12092 13.75 7V5C13.75 3.87908 14.0567 3.08544 14.5711 2.57105C15.0854 2.05667 15.8791 1.75 17 1.75H19C20.1209 1.75 20.9146 2.05667 21.4289 2.57105C21.9433 3.08544 22.25 3.87908 22.25 5V7C22.25 8.12092 21.9433 8.91456 21.4289 9.42895C20.9146 9.94333 20.1209 10.25 19 10.25ZM17 2.25C16.1535 2.25 15.4305 2.4274 14.9289 2.92895C14.4274 3.43049 14.25 4.15353 14.25 5V7C14.25 7.84647 14.4274 8.56951 14.9289 9.07105C15.4305 9.5726 16.1535 9.75 17 9.75H19C19.8465 9.75 20.5695 9.5726 21.0711 9.07105C21.5726 8.56951 21.75 7.84647 21.75 7V5C21.75 4.15353 21.5726 3.43049 21.0711 2.92895C20.5695 2.4274 19.8465 2.25 19 2.25H17Z'
					stroke='#4D4C53'
				/>
				<path
					d='M19 22.25H17C15.8791 22.25 15.0854 21.9433 14.5711 21.4289C14.0567 20.9146 13.75 20.1209 13.75 19V17C13.75 15.8791 14.0567 15.0854 14.5711 14.5711C15.0854 14.0567 15.8791 13.75 17 13.75H19C20.1209 13.75 20.9146 14.0567 21.4289 14.5711C21.9433 15.0854 22.25 15.8791 22.25 17V19C22.25 20.1209 21.9433 20.9146 21.4289 21.4289C20.9146 21.9433 20.1209 22.25 19 22.25ZM17 14.25C16.1535 14.25 15.4305 14.4274 14.9289 14.9289C14.4274 15.4305 14.25 16.1535 14.25 17V19C14.25 19.8465 14.4274 20.5695 14.9289 21.0711C15.4305 21.5726 16.1535 21.75 17 21.75H19C19.8465 21.75 20.5695 21.5726 21.0711 21.0711C21.5726 20.5695 21.75 19.8465 21.75 19V17C21.75 16.1535 21.5726 15.4305 21.0711 14.9289C20.5695 14.4274 19.8465 14.25 19 14.25H17Z'
					stroke='#4D4C53'
				/>
				<path
					d='M7 22.25H5C3.87908 22.25 3.08544 21.9433 2.57105 21.4289C2.05667 20.9146 1.75 20.1209 1.75 19V17C1.75 15.8791 2.05667 15.0854 2.57105 14.5711C3.08544 14.0567 3.87908 13.75 5 13.75H7C8.12092 13.75 8.91456 14.0567 9.42895 14.5711C9.94333 15.0854 10.25 15.8791 10.25 17V19C10.25 20.1209 9.94333 20.9146 9.42895 21.4289C8.91456 21.9433 8.12092 22.25 7 22.25ZM5 14.25C4.15353 14.25 3.43049 14.4274 2.92895 14.9289C2.4274 15.4305 2.25 16.1535 2.25 17V19C2.25 19.8465 2.4274 20.5695 2.92895 21.0711C3.43049 21.5726 4.15353 21.75 5 21.75H7C7.84647 21.75 8.56951 21.5726 9.07105 21.0711C9.5726 20.5695 9.75 19.8465 9.75 19V17C9.75 16.1535 9.5726 15.4305 9.07105 14.9289C8.56951 14.4274 7.84647 14.25 7 14.25H5Z'
					stroke='#4D4C53'
				/>
			</svg>
		)
	},
	{
		name: 'Дневник',
		link: '/diary',
		icon: (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M4 3.07692V21.923C4 22.2086 4.11346 22.4826 4.31542 22.6845C4.51738 22.8865 4.7913 22.9999 5.07692 22.9999H6.33153V2H5.07692C4.7913 2 4.51738 2.11346 4.31542 2.31542C4.11346 2.51738 4 2.7913 4 3.07692Z'
					stroke='#4D4C53'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6.33154 2V22.9999H19.723C20.0087 22.9999 20.2826 22.8865 20.4845 22.6845C20.6865 22.4826 20.8 22.2086 20.8 21.923V3.07692C20.8 2.7913 20.6865 2.51738 20.4845 2.31542C20.2826 2.11346 20.0087 2 19.723 2H6.33154Z'
					stroke='#4D4C53'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M16.7417 5.85327H10.3899V9.05253H16.7417V5.85327Z'
					stroke='#4D4C53'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		)
	},
	{
		name: 'Задачи',
		link: '/tasks',
		icon: (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M12.3701 8.88H17.6201'
					stroke='#4D4C53'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6.37988 8.88L7.12988 9.63L9.37988 7.38'
					stroke='#4D4C53'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M12.3701 15.8799H17.6201'
					stroke='#4D4C53'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M6.37988 15.88L7.12988 16.63L9.37988 14.38'
					stroke='#4D4C53'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M9 22H15C20 22 22 20 22 15V9C22 4 20 2 15 2H9C4 2 2 4 2 9V15C2 20 4 22 9 22Z'
					stroke='#4D4C53'
					strokeWidth='1.5'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		)
	},
	{
		name: 'Фокусировка',
		link: '/focus',
		icon: (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M12.7233 1.90046L12.1882 1.86266L12.1881 2.39911L12.1875 5.12489V5.125C12.1875 5.22855 12.1036 5.3125 12 5.3125C11.8965 5.3125 11.8125 5.22856 11.8125 5.12502C11.8125 5.12501 11.8125 5.12501 11.8125 5.125L11.8126 2.39919L11.8126 1.86264L11.2774 1.90041C6.26113 2.25438 2.25438 6.26113 1.90041 11.2774L1.86264 11.8126L2.39919 11.8126L5.125 11.8125C5.125 11.8125 5.12501 11.8125 5.12501 11.8125C5.22856 11.8125 5.3125 11.8964 5.3125 12C5.3125 12.1036 5.22855 12.1875 5.125 12.1875H5.12489L2.39911 12.1881L1.86266 12.1882L1.90046 12.7233C2.25477 17.7393 6.26137 21.7456 11.2774 22.0996L11.8126 22.1374L11.8126 21.6008L11.8125 18.875C11.8125 18.7714 11.8964 18.6875 12 18.6875C12.1036 18.6875 12.1875 18.7714 12.1875 18.875V18.8751L12.1881 21.6009L12.1882 22.1373L12.7233 22.0995C17.739 21.7452 21.7452 17.739 22.0995 12.7233L22.1373 12.1882L21.6009 12.1881L18.8751 12.1875H18.875C18.7714 12.1875 18.6875 12.1036 18.6875 12C18.6875 11.8964 18.7714 11.8125 18.875 11.8125L21.6008 11.8126L22.1374 11.8126L22.0996 11.2774C21.7456 6.26137 17.7393 2.25477 12.7233 1.90046ZM12 1.5C17.799 1.5 22.5 6.20101 22.5 12C22.5 17.799 17.799 22.5 12 22.5C6.20101 22.5 1.5 17.799 1.5 12C1.5 6.20101 6.20101 1.5 12 1.5ZM12 9.0625C13.6223 9.0625 14.9375 10.3777 14.9375 12C14.9375 13.6223 13.6223 14.9375 12 14.9375C10.3777 14.9375 9.0625 13.6223 9.0625 12C9.0625 10.3777 10.3777 9.0625 12 9.0625ZM12 9.4375C10.5848 9.4375 9.4375 10.5848 9.4375 12C9.4375 13.4152 10.5848 14.5625 12 14.5625C13.4152 14.5625 14.5625 13.4152 14.5625 12C14.5625 10.5848 13.4152 9.4375 12 9.4375Z'
					stroke='#4D4C53'
				/>
			</svg>
		)
	},
	{
		name: 'Календарь',
		link: '/calendar',
		icon: (
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
					d='M3.5 9.09009H20.5'
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
		)
	},
	{
		name: 'Настройки',
		link: '/settings',
		icon: (
			<svg
				width='24'
				height='24'
				viewBox='0 0 24 24'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<path
					d='M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z'
					stroke='#4D4C53'
					strokeWidth='1.5'
					strokeMiterlimit='10'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
				<path
					d='M2 12.8799V11.1199C2 10.0799 2.85 9.21994 3.9 9.21994C5.71 9.21994 6.45 7.93994 5.54 6.36994C5.02 5.46994 5.33 4.29994 6.24 3.77994L7.97 2.78994C8.76 2.31994 9.78 2.59994 10.25 3.38994L10.36 3.57994C11.26 5.14994 12.74 5.14994 13.65 3.57994L13.76 3.38994C14.23 2.59994 15.25 2.31994 16.04 2.78994L17.77 3.77994C18.68 4.29994 18.99 5.46994 18.47 6.36994C17.56 7.93994 18.3 9.21994 20.11 9.21994C21.15 9.21994 22.01 10.0699 22.01 11.1199V12.8799C22.01 13.9199 21.16 14.7799 20.11 14.7799C18.3 14.7799 17.56 16.0599 18.47 17.6299C18.99 18.5399 18.68 19.6999 17.77 20.2199L16.04 21.2099C15.25 21.6799 14.23 21.3999 13.76 20.6099L13.65 20.4199C12.75 18.8499 11.27 18.8499 10.36 20.4199L10.25 20.6099C9.78 21.3999 8.76 21.6799 7.97 21.2099L6.24 20.2199C5.33 19.6999 5.02 18.5299 5.54 17.6299C6.45 16.0599 5.71 14.7799 3.9 14.7799C2.85 14.7799 2 13.9199 2 12.8799Z'
					stroke='#4D4C53'
					strokeWidth='1.5'
					strokeMiterlimit='10'
					strokeLinecap='round'
					strokeLinejoin='round'
				/>
			</svg>
		)
	}
]

const projects = [
	{ color: '#7AC555', name: 'Mobile App' },
	{ color: '#FFA500', name: 'Website Redesign' },
	{ color: '#E35353', name: 'Gymer' },
	{ color: '#9CA6B4', name: 'StarVoice' }
]

const Sidebar = () => {
	const { pathname } = useLocation()

	return (
		<SidebarWrapper>
			<Logo />
			<SidebarLinks>
				{links.map((link, index) => (
					<SidebarLink
						to={link.link}
						key={index}
						isActive={pathname === link.link}
					>
						<span>{link.icon}</span>
						{link.name}
					</SidebarLink>
				))}
			</SidebarLinks>
			<SidebarLinks>
				{projects.map((link, index) => (
					<SidebarProject
						to={`/projects/${link.name}`}
						key={index}
						isActive={pathname === link.name}
						color={link.color}
					>
						<span></span>
						{link.name}
					</SidebarProject>
				))}
			</SidebarLinks>
			<Subscription/>
		</SidebarWrapper>
	)
}

export default Sidebar