import React from 'react'
import { ModalWrapper } from './ModalWindowStyles'

interface ModalWindowProps {
	children: React.ReactNode
}

const ModalWindow: React.FC<ModalWindowProps> = ({ children }) => {
	return <ModalWrapper>{children}</ModalWrapper>
}

export default ModalWindow
