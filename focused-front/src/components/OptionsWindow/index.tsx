import React from 'react'
import {
	OptionsItems,
	OptionsWrapper,
	OptionsItem
} from './OptionsWindowStyles'

interface OptionsWindowParams {
	isOpen: boolean
	children: React.ReactNode
	openWindow: () => void
}

const OptionsWindow: React.FC<OptionsWindowParams> = ({
	isOpen,
	children,
	openWindow
}) => {
	return (
		<>
			{isOpen && (
				<OptionsWrapper>
					<OptionsItems>{children}</OptionsItems>
				</OptionsWrapper>
			)}
		</>
	)
}

export default OptionsWindow
