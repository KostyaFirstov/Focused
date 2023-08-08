import React from 'react'
import { Container, ContainerFlex, ContentWrapper } from '../styles/globalStyle'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'
import { useSelector } from 'react-redux'
import { selectIsAuth } from '../redux/slices/authSlice'

const MainLayout = () => {
	const isAuth = useSelector(selectIsAuth)

	if (!isAuth) {
		return <Navigate to='/login' />
	}

	return (
		<>
			<Header />
			<ContainerFlex>
				<Sidebar />
				<ContentWrapper>
					<Container>
						<Outlet />
					</Container>
				</ContentWrapper>
			</ContainerFlex>
		</>
	)
}

export default MainLayout
