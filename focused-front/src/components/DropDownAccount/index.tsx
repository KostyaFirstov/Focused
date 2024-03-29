import React from 'react'
import dateFormat from 'dateformat'
import {
	AccountWrapper,
	AccountImage,
	AccountInfo,
	AccountName,
	AccountPlace,
	AccountThumbler,
	AccountDropDown,
	AccountLinks,
	AccountLink,
	AccountTop,
	AccountBtn
} from './DropdownAccountStyles'
import useOutsideClick from '../../hooks/useOutsideClick'
import { useDispatch, useSelector } from 'react-redux'
import { logout, selectAccount } from '../../redux/slices/authSlice'

const DropdownAccount = () => {
	const [isOpen, setIsOpen] = React.useState(false)
	const dropDownRef = React.useRef<HTMLDivElement>(null)
	const accountData = useSelector(selectAccount)
	const dispatch = useDispatch()
	const date = dateFormat(new Date(), 'd mmm yyyy')

	useOutsideClick([dropDownRef], () => {
		setIsOpen(false)
	})

	const handleOpen = () => {
		setIsOpen(prev => !prev)
	}

	const handleLogout = () => {
		dispatch(logout())
	}

	return (
		<AccountWrapper ref={dropDownRef}>
			<AccountTop onClick={handleOpen} $active={isOpen ? true : false}>
				<AccountInfo>
					<AccountName>{accountData?.username}</AccountName>
					<AccountPlace>{date}</AccountPlace>
				</AccountInfo>
				<AccountImage src='/img/user.jpg' alt='Avatar' />
				<AccountThumbler $active={isOpen ? true : false}>
					<svg
						width='18'
						height='18'
						viewBox='0 0 18 18'
						fill='none'
						xmlns='http://www.w3.org/2000/svg'
					>
						<path
							d='M9.00002 12.6C8.47502 12.6 7.95002 12.3975 7.55252 12L2.66251 7.10998C2.44501 6.89248 2.44501 6.53248 2.66251 6.31498C2.88001 6.09748 3.24001 6.09748 3.45751 6.31498L8.34752 11.205C8.70752 11.565 9.29252 11.565 9.65252 11.205L14.5425 6.31498C14.76 6.09748 15.12 6.09748 15.3375 6.31498C15.555 6.53248 15.555 6.89248 15.3375 7.10998L10.4475 12C10.05 12.3975 9.52502 12.6 9.00002 12.6Z'
							fill='#292D32'
						/>
					</svg>
				</AccountThumbler>
			</AccountTop>
			{isOpen && (
				<AccountDropDown>
					<AccountLinks>
						<AccountLink to='/profile'>Мой профиль</AccountLink>
						<AccountLink to='/statistics'>Статистика</AccountLink>
						<AccountLink to='/settings'>Настройки</AccountLink>
						<AccountBtn onClick={handleLogout}>Выйти</AccountBtn>
					</AccountLinks>
				</AccountDropDown>
			)}
		</AccountWrapper>
	)
}

export default DropdownAccount
