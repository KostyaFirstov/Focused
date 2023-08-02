import React from 'react'
import { Container, ContainerFlex, ContentWrapper } from '../styles/globalStyle'
import { Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const MainLayout = () => {
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
