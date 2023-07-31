import React from 'react'
import { Container, ContainerFlex } from '../styles/globalStyle'
import { Navigate, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const MainLayout = () => {
	return (
		<ContainerFlex>
			<Sidebar />
			<Container>
				<Header />
				<Outlet />
			</Container>
		</ContainerFlex>
	)
}

export default MainLayout
