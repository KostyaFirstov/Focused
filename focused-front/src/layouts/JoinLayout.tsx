import React from 'react'
import { JoinUsWrapper } from '../pages/Auth/AuthStyles'
import Logo from '../components/Logo'
import { Navigate, Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../redux/slices/authSlice'

const JoinLayout = () => {
	const isAuth = useSelector(selectIsAuth)

	if (isAuth) {
		return <Navigate to='/' />
	}

	return (
		<JoinUsWrapper>
			<Logo />
			<Outlet />
		</JoinUsWrapper>
	)
}

export default JoinLayout
