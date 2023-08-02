import React from 'react'
import { Link } from 'react-router-dom'
import { LogoWrapper } from './LogoStyles'

const Logo = () => {
	return (
		<LogoWrapper to='/'>
			<svg
				width='250'
				height='90'
				viewBox='0 0 250 90'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
			>
				<rect width='250' height='90' fill='#3EC091' />
				<path
					d='M42.0282 58.4145H47.4402C47.4557 58.4145 47.4684 58.4016 47.4684 58.3856V47.3447H59.7153C59.7309 47.3447 59.7436 47.3317 59.7436 47.3158V41.7809C59.7436 41.7649 59.7309 41.752 59.7153 41.752H47.4684V36.2748H65.1252C65.1408 36.2748 65.1535 36.2619 65.1535 36.2459V30.711C65.1535 30.6951 65.1408 30.6821 65.1252 30.6821H42.0282C42.0126 30.6821 42 30.6951 42 30.711V58.3856C42 58.4016 42.0126 58.4145 42.0282 58.4145Z'
					fill='white'
				/>
				<path
					d='M73.9906 52.8498C78.4741 52.8498 82.1087 49.1326 82.1087 44.5472C82.1087 39.9618 78.4741 36.2445 73.9906 36.2445C69.507 36.2445 65.8724 39.9618 65.8724 44.5472C65.8724 49.1326 69.507 52.8498 73.9906 52.8498ZM106.81 50.3996C106.799 50.3888 106.781 50.3888 106.77 50.3996C103.616 53.6258 98.484 53.6258 95.3298 50.3996C92.1756 47.1737 92.1756 41.9252 95.3298 38.6993C98.484 35.4732 103.616 35.4732 106.77 38.6993C106.781 38.7104 106.8 38.7102 106.81 38.6991L110.636 34.7845C110.647 34.7732 110.647 34.7549 110.636 34.7436C108.075 32.1246 104.671 30.6821 101.05 30.6821H73.9906C73.975 30.6821 73.9623 30.6951 73.9623 30.711C73.9623 30.7269 73.975 30.7399 73.9906 30.7399C81.4348 30.7399 87.491 36.9337 87.491 44.5472V44.5495C87.491 48.2521 88.9015 51.7336 91.4622 54.3528C94.0232 56.972 97.4281 58.4145 101.05 58.4145C104.672 58.4145 108.076 56.972 110.636 54.3526C110.647 54.3413 110.647 54.323 110.636 54.3117L106.81 50.3996Z'
					fill='white'
				/>
				<path
					d='M182.99 36.2748C183.005 36.2748 183.018 36.2618 183.018 36.2459V30.711C183.018 30.695 183.005 30.6821 182.99 30.6821H159.893C159.877 30.6821 159.865 30.695 159.865 30.711V38.9817H154.51C154.495 37.4521 153.274 36.2126 151.775 36.2126H144.903C143.395 36.2126 142.168 37.4679 142.168 39.0106C142.168 40.5547 143.395 41.8109 144.903 41.8109H151.775C156.236 41.8109 159.865 45.5213 159.865 50.0823V58.3856C159.865 58.4016 159.877 58.4145 159.893 58.4145H182.99C183.005 58.4145 183.018 58.4016 183.018 58.3856V52.8507C183.018 52.8347 183.005 52.8218 182.99 52.8218H165.333V47.3446H177.58C177.596 47.3446 177.608 47.3317 177.608 47.3158V41.7808C177.608 41.7649 177.596 41.752 177.58 41.752H165.333V36.2748L182.99 36.2748ZM151.775 47.2843H144.903C140.442 47.2843 136.813 43.5739 136.813 39.0129C136.813 34.4507 140.442 30.7394 144.903 30.7394C144.918 30.7394 144.931 30.7264 144.931 30.7105C144.931 30.6946 144.918 30.6816 144.903 30.6816H136.785C136.784 30.6816 136.784 30.6823 136.783 30.6823H131.375C131.36 30.6823 131.347 30.6953 131.347 30.7112V46.5744C131.347 50.0202 128.606 52.8237 125.236 52.8237C121.867 52.8237 119.126 50.0202 119.126 46.5744V30.711C119.126 30.695 119.113 30.6821 119.098 30.6821H113.688C113.672 30.6821 113.66 30.695 113.66 30.711V46.5742C113.66 53.1026 118.853 58.414 125.236 58.414H136.785C136.801 58.414 136.813 58.4011 136.813 58.3851V50.1135H142.168C142.182 51.643 143.404 52.8826 144.903 52.8826H151.775C153.283 52.8826 154.51 51.6273 154.51 50.0846C154.511 48.5405 153.283 47.2843 151.775 47.2843Z'
					fill='white'
				/>
				<path
					d='M186.473 58.4145H196.04C203.515 58.4145 209.598 52.1941 209.598 44.5483C209.598 36.9025 203.515 30.6821 196.04 30.6821H186.473C186.457 30.6821 186.444 30.6951 186.444 30.711V58.3856C186.444 58.4016 186.457 58.4145 186.473 58.4145ZM191.911 36.2748H196.04C200.5 36.2748 204.129 39.9864 204.129 44.5483C204.129 49.1103 200.5 52.8218 196.04 52.8218H191.911V36.2748Z'
					fill='white'
				/>
			</svg>
		</LogoWrapper>
	)
}

export default Logo